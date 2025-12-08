// УНИВЕРСАЛЬНЫЙ СКРИПТ ДЛЯ ДИНАМИЧЕСКОГО РЕНДЕРА ВСЕХ ФОРМ ДОСТИЖЕНИЙ ПО ТИПАМ ДЕЯТЕЛЬНОСТИ

// Загрузка конфигов
const FORM_CONFIGS = {};
async function loadFormConfig(activityKey) {
    if (FORM_CONFIGS[activityKey]) return FORM_CONFIGS[activityKey];
    try {
        const module = await import(`./form-configs/${activityKey}.js`);
        FORM_CONFIGS[activityKey] = module.default;
        return module.default;
    } catch (err) {
        console.error("Ошибка загрузки конфигурационного файла:", activityKey, err);
        throw err;
    }
}

// Рендер формы (подтипы + поля)
async function renderForm(activityKey) {
    const config = await loadFormConfig(activityKey);
    const toggleContainer = document.getElementById("toggle-form");
    const formContainer = document.getElementById("form-container");
    toggleContainer.innerHTML = "";
    formContainer.innerHTML = "";

    if (!document.querySelector(".reset-form")) {
        const resetBtnHTML = `
            <button title="Сбросить" class="reset-form actionBtn">
                <img src="/static/media/resetForm.0eabaacc0e646bdd338b9cf133a91de5.svg" alt="reset">
            </button>
        `;
        formContainer.insertAdjacentHTML("beforebegin", resetBtnHTML);

        const resetBtn = document.querySelector(".reset-form");
        const mainForm = document.getElementById("main-form");
        resetBtn.addEventListener("click", () => {
            mainForm.reset();
        });
    }

    const typeKeys = Object.keys(config.types);
    if (typeKeys.length > 1) {
        renderAchieveTypeRadios(activityKey, config);
    } else {
        const typeKey = typeKeys[0];
        renderFormFields(config, typeKey);
    }
}

// Рендер радиокнопок для выбора типа достижения
function renderAchieveTypeRadios(activityKey, config) {
    const container = document.getElementById("toggle-form");
    container.dataset.activity = activityKey;
    const typeKeys = Object.keys(config.types);
    let title = "Выберите тип достижения";
    if (activityKey === "sport") {
        title = "Тип спортивного достижения";
    }

    container.innerHTML = `
        <label class="form-title">${title}</label>
        <div class="radio-group" style="display: flex; flex-direction: column; gap: 5px;">
            ${typeKeys.map(key => `
                <label style="display: flex; align-items: center; gap: 5px;">
                    <input type="radio" name="achieve-type" value="${key}">
                    ${config.types[key].label}
                </label>
            `).join("")}
        </div>
    `;

    const radios = container.querySelectorAll('input[name="achieve-type"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            renderFormFields(config, radio.value);
        });
    });
}

// Динамическое отображение зависимых полей формы
let currentConfigFields = [];
function setupDependsOn() {
    const dependentFields = document.querySelectorAll("[id^='field-']");
    dependentFields.forEach(fieldDiv => {
        const fieldName = fieldDiv.id.replace("field-", "");
        const fieldConfig = getFieldConfigByName(fieldName);
        if (!fieldConfig || !fieldConfig.dependsOn) return;

        const dependsOn = fieldConfig.dependsOn;
        const triggerInputs = document.querySelectorAll(`input[name="${dependsOn.field}"]`);
        fieldDiv.style.display = "none";

        triggerInputs.forEach(input => {
            input.addEventListener("change", () => {
                const check = input.checked && (
                    Array.isArray(dependsOn.value)
                        ? dependsOn.value.includes(input.value)
                        : input.value === dependsOn.value
                );

                fieldDiv.style.display = check ? "block" : "none";
            });
        });
    });
}

// Получение конфигурации поля формы по его имени
function getFieldConfigByName(name) {
    return currentConfigFields.find(f => f.name === name);
}

// Инициализация кнопок мест (1–10) ("Научная деятельность" - "Научное мероприятие")
function initPlacesButtons() {
    document.querySelectorAll('.places-group').forEach(group => {
        const buttons = Array.from(group.querySelectorAll('.place-btn'));
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    });
}

// Динамическое отображение полей подтипов публикации
function renderPublicationSubform(subType) {
    const container = document.getElementById("publication-subform");
    if (!container) return;
    container.innerHTML = "";
    const pubFieldConfig = currentConfigFields.find(f => f.name === "publication-type");
    if (!pubFieldConfig?.subfields?.[subType]) return;
    const fields = pubFieldConfig.subfields[subType];
    fields.forEach(field => {
        const html = renderField(field);
        container.insertAdjacentHTML("beforeend", html);
    });

    setupDependsOn();
    initPlacesButtons();
}

// Настройка радиокнопок выбора типа публикации и рендер соответствующей формы
function setupPublicationType() {
    const radios = document.querySelectorAll('input[name="publication-type"]');
    if (!radios.length) return;

    radios.forEach(r => {
        r.addEventListener("change", () => {
            renderPublicationSubform(r.value);
        });
    });

    const checked = document.querySelector('input[name="publication-type"]:checked');
    if (checked) {
        renderPublicationSubform(checked.value);
    } else {
        radios[0].checked = true;
        radios[0].dispatchEvent(new Event('change', { bubbles: true }));
    }
}

// Инициализация полей формы для выбранного типа учебной деятельности.
function renderStudySubform() {
    const container = document.getElementById("study-subform");
    if (!container) return;

    const selectedRadio = document.querySelector('input[name="study-main-type"]:checked');
    if (!selectedRadio) {
        container.innerHTML = "";
        return;
    }

    const subfieldsObj = currentConfigFields.find(f => f.name === "study-main-type")?.subfields;
    if (!subfieldsObj) return;

    const fieldsToRender = subfieldsObj[selectedRadio.value] || [];
    container.innerHTML = "";
    fieldsToRender.forEach(field => {
        const html = renderField(field);
        container.insertAdjacentHTML("beforeend", html);
    });

    setupDependsOn();
    initPlacesButtons();
}

// Создание и отображение этих полей в зависимости от выбранного варианта.
function setupStudyMainType() {
    const radios = document.querySelectorAll('input[name="study-main-type"]');
    if (!radios.length) return;

    const checked = document.querySelector('input[name="study-main-type"]:checked');
    if (!checked) {
        radios[0].checked = true;
    }
    radios.forEach(r => r.addEventListener("change", renderStudySubform));

    renderStudySubform();
}

// Рендер всех полей выбранного подтипа
function renderFormFields(config, typeKey) {
    const container = document.getElementById("form-container");
    container.innerHTML = "";
    const fields = config.types[typeKey].fields || [];
    currentConfigFields = fields;

    fields.forEach(field => {
        let html = renderField(field);
        if (field.type === "radio" && field.name === "publication-type") {
            html += `<div id="publication-subform"></div>`;
        }
        if (field.name === "study-main-type") {
            html += `<div id="study-subform"></div>`;
        }
        container.insertAdjacentHTML("beforeend", html);
    });

    container.insertAdjacentHTML("beforeend", `<button class="submit" type="button">Отправить</button>`);

    setupDependsOn();
    setupPublicationType();
    setupStudyMainType();
    initPlacesButtons();
}

// Рендер одного элемента формы
function renderField(field) {
    const descriptionHTML = field.description ? `<div class="small-text">${field.description}</div>` : "";
    const helpHTML = field.help ? `<div class="small-text">${field.help}</div>` : "";
    const additionalClass = field.class || "";

    if (field.type === "text" || field.type === "date") {
        return `
            <div class="form-element ${additionalClass}" id="field-${field.name}">
                <label class="form-title">
                    ${field.label}
                    ${field.help ? ` (${field.help})` : ""}
                </label>
                ${descriptionHTML}
                <input class="input-line-element" type="${field.type}" name="${field.name}">
            </div>
        `;
    }

    if (field.type === "file") {
        return `
            <div class="form-element ${additionalClass}" id="field-${field.name}">
                <label class="form-title">${field.label}</label>
                ${descriptionHTML}
                <label class="input-wrap">
                    <input class="input-line-element" type="file" name="${field.name}">
                </label>
                ${helpHTML}
            </div>
        `;
    }

    if (field.type === "radio") {
        return `
            <div class="form-element ${additionalClass}" id="field-${field.name}">
                <label class="form-title">${field.label}</label>
                ${descriptionHTML}
                <div class="radio-group" style="display:flex; flex-direction:column; gap:5px;">
                    ${field.options.map(op => `
                        <label style="display:flex; align-items:center; gap:5px;">
                            <input type="radio" name="${field.name}" value="${op.value}">
                            ${op.label}
                        </label>
                    `).join("")}
                </div>
                ${helpHTML}
            </div>
        `;
    }

    if (field.type === "places") {
        const buttonsHTML = Array.from({ length: 10 }, (_, i) => `
            <button type="button" class="place-btn" data-value="${i+1}">${i+1}</button>
        `).join("");
        return `
            <div class="form-element ${additionalClass}" id="field-${field.name}">
                <label class="form-title">${field.label}</label>
                <div class="places-group" style="display:flex; gap:5px;">
                    ${buttonsHTML}
                </div>
            </div>
        `;
    }

    return "";
}

// Кнопки активности
document.addEventListener("DOMContentLoaded", () => {
    const activityButtons = document.querySelectorAll(".achieve-btn");
    const mainForm = document.getElementById("main-form");
    mainForm.style.display = "none";
    activityButtons.forEach(btn => {
        btn.addEventListener("click", async () => {
            const activityKey = btn.dataset.activity;
            if (!activityKey) return;

            mainForm.style.display = "block";
            activityButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            await renderForm(activityKey);
        });
    });
});