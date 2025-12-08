// НАУЧНАЯ ДЕЯТЕЛЬНОСТЬ

export default {
  types: {
    event: { // Научное мероприятие
      label: "Научное мероприятие",
      fields: [
        { type: "text", name: "event-name", label: "Название научного мероприятия" },
        {
          type: "radio",
          label: "Тип научного мероприятия",
          name: "event-type",
          options: [
            { value: "conference", label: "Конференция" },
            { value: "symposium", label: "Симпозиум" },
            { value: "forum", label: "Форум" },
            { value: "contest", label: "Конкурс" },
            { value: "exhibition", label: "Выставка" },
            { value: "seminar", label: "Семинар" }
          ]
        },
        { type: "text", name: "event-place", label: "Место проведения" },
        {
          type: "radio",
          label: "Уровень мероприятия",
          name: "event-level",
          options: [
            { value: "university", label: "Университетский" },
            { value: "regional", label: "Региональный" },
            { value: "dvfo", label: "Межрегиональный (ДВФО)" },
            { value: "rf", label: "Всероссийский" },
            { value: "international", label: "Международный" }
          ]
        },
        {
          type: "radio",
          label: "Роль в научном мероприятии",
          name: "role",
          options: [
            { value: "participant", label: "Участник" },
            { value: "speaker", label: "Докладчик" },
            { value: "other", label: "Другое" }
          ]
        },
        {
          type: "radio",
          label: "Достижение",
          name: "achievement",
          options: [
            { value: "prizer", label: "Призер" },
            { value: "winner", label: "Победитель" },
            { value: "none", label: "Нет" }
          ]
        },
        {
          type: "places",
          name: "place",
          label: "Место",
          dependsOn: { field: "achievement", value: ["prizer", "winner"] }
        },
        { type: "text", name: "nomination", label: "Номинация/Квалификация и т.д." },
        { type: "date", name: "date-start", label: "Дата начала" },
        { type: "date", name: "date-end", label: "Дата окончания" },
        {
          type: "text",
          name: "event-link",
          label: "Укажите ссылку, подтверждающую проведение научного мероприятия",
          description: "Ссылка на новость о проведении мероприятия, ссылка на результаты научного мероприятия, информационное письмо, и т.д."
        },
        {
          type: "file",
          name: "event-file",
          label: "Загрузите подтверждающий документ",
          description: "Если подтверждающий документ написан на иностранном языке, необходимо также приложить заверенный перевод (п. 2.3 Положения о ПГАС). Приложите всё одним документом. Данное сообщение не распространяется на научные публикации.",
          help: "Максимальное число файлов: 1, Максимальный размер одного файла: 10MB, Разрешенные типы файлов: PDF, Изображение"
        },
        {
          type: "radio",
          label: "Заявитель несет ответственность за предоставление информации в соответствии с Законодательством Российской Федерации и нормативными локальными актами ДВФУ",
          name: "responsibility",
          options: [{ value: "confirm", label: "Подтверждаю" }]
        }
      ]
    },
    publication: { // Публикация
    label: "Публикация",
    fields: [
        {
        type: "radio",
        label: "Тип публикации",
        name: "publication-type",
        options: [
            { value: "rinc", label: "РИНЦ" },
            { value: "scopus", label: "Scopus" },
            { value: "wos", label: "Web of Science" },
            { value: "bak", label: "BAK/RSCI" },
            { value: "conference-materials", label: "Материалы конференции" },
            { value: "monograph", label: "Монография" }
        ],
        subfields: {
            rinc: [ // РИНЦ (выставлен по умолчанию)
            {
                type: "radio",
                label: "Опубликовано в периодическом издании (и имеет номер ISSN)?",
                name: "issn",
                options: [
                { value: "yes", label: "Да" },
                { value: "no", label: "Нет" }
                ]
            },
            { type: "text", name: "title", label: "Название публикации" },
            { type: "text", name: "output", label: "Выходные данные публикации" },
            {
                type: "radio",
                label: "Количество авторов",
                name: "authors-count",
                description:
                "Укажите точное количество авторов публикации. Обратите внимание - научный руководитель не считается за автора статьи при учете в Портфолио.",
                options: [
                ...Array.from({ length: 10 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
                { value: "other", label: "Другое" }
                ]
            },
            { type: "date", name: "publish-date", label: "Дата публикации материала" },
            {
                type: "text",
                name: "elib-link",
                label: "Укажите ссылку на публикацию в электронной научной библиотеке (elibrary / cyberleninka)",
                description:
                "Ссылка на публикацию в электронной научной библиотеке elibrary.ru / cyberleninka.ru / иные библиотеки, позволяющие подтвердить уровень публикации."
            },
            {
                type: "text",
                name: "supervisor",
                label: "Укажите ФИО научного руководителя",
                description: "Необязательный вопрос"
            },
            {
                type: "file",
                name: "publication-file",
                label: "Загрузите подтверждающий документ",
                description:
                "Если подтверждающий документ написан на иностранном языке, необходимо также приложить заверенный перевод (п. 2.3 Положения о ПГАС). Приложите всё одним документом. Данное сообщение не распространяется на научные публикации.",
                help:
                "Максимальное число файлов: 1, Максимальный размер одного файла: 10MB, Разрешенные типы файлов: PDF, Изображение"
            },
            {
                type: "radio",
                label:
                "Заявитель несет ответственность за предоставление информации в соответствии с Законодательством Российской Федерации и нормативными локальными актами ДВФУ",
                name: "responsibility",
                options: [{ value: "confirm", label: "Подтверждаю" }]
            }
            ],

            scopus: [ // Scopus
            {
                type: "radio",
                label: "Квартиль рецензируемого журнала",
                name: "quartile",
                description: "Квартили: Q1, Q2, Q3 или Q4.",
                options: [
                { value: "q1", label: "Q1" },
                { value: "q2", label: "Q2" },
                { value: "q3q4", label: "Q3–Q4" }
                ]
            },
            {
                type: "radio",
                label: "Опубликовано в периодическом издании (и имеет номер ISSN)?",
                name: "issn",
                options: [
                { value: "yes", label: "Да" },
                { value: "no", label: "Нет" }
                ]
            },
            { type: "text", name: "title", label: "Название публикации" },
            { type: "text", name: "output", label: "Выходные данные публикации" },
            {
                type: "radio",
                label: "Количество авторов",
                name: "authors-count",
                description:
                "Укажите точное количество авторов публикации. Обратите внимание - научный руководитель не считается за автора статьи при учете в Портфолио.",
                options: [
                ...Array.from({ length: 10 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
                { value: "other", label: "Другое" }
                ]
            },
            { type: "date", name: "publish-date", label: "Дата публикации материала" },
            {
                type: "text",
                name: "elib-link",
                label: "Укажите ссылку на публикацию в электронной научной библиотеке (elibrary / cyberleninka)",
                description:
                "Ссылка на публикацию в электронной научной библиотеке elibrary.ru / cyberleninka.ru / иные библиотеки, позволяющие подтвердить уровень публикации."
            },
            {
                type: "text",
                name: "supervisor",
                label: "Укажите ФИО научного руководителя",
                description: "Необязательный вопрос"
            },
            {
                type: "file",
                name: "publication-file",
                label: "Загрузите подтверждающий документ",
                description:
                "Если подтверждающий документ написан на иностранном языке, необходимо также приложить заверенный перевод (п. 2.3 Положения о ПГАС). Приложите всё одним документом. Данное сообщение не распространяется на научные публикации.",
                help:
                "Максимальное число файлов: 1, Максимальный размер одного файла: 10MB, Разрешенные типы файлов: PDF, Изображение"
            },
            {
                type: "radio",
                label:
                "Заявитель несет ответственность за предоставление информации в соответствии с Законодательством Российской Федерации и нормативными локальными актами ДВФУ",
                name: "responsibility",
                options: [{ value: "confirm", label: "Подтверждаю" }]
            }
            ],

            wos: [ // Web of Science
            {
                type: "radio",
                label: "Квартиль рецензируемого журнала",
                name: "quartile",
                description: "Квартили: Q1, Q2, Q3 или Q4.",
                options: [
                { value: "q1", label: "Q1" },
                { value: "q2", label: "Q2" },
                { value: "q3q4", label: "Q3–Q4" }
                ]
            },
            {
                type: "radio",
                label: "Опубликовано в периодическом издании (и имеет номер ISSN)?",
                name: "issn",
                options: [
                { value: "yes", label: "Да" },
                { value: "no", label: "Нет" }
                ]
            },
            { type: "text", name: "title", label: "Название публикации" },
            { type: "text", name: "output", label: "Выходные данные публикации" },
            {
                type: "radio",
                label: "Количество авторов",
                name: "authors-count",
                description:
                "Укажите точное количество авторов публикации. Обратите внимание - научный руководитель не считается за автора статьи при учете в Портфолио.",
                options: [
                ...Array.from({ length: 10 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
                { value: "other", label: "Другое" }
                ]
            },
            { type: "date", name: "publish-date", label: "Дата публикации материала" },
            {
                type: "text",
                name: "elib-link",
                label: "Укажите ссылку на публикацию в электронной научной библиотеке (elibrary / cyberleninka)",
                description:
                "Ссылка на публикацию в электронной научной библиотеке elibrary.ru / cyberleninka.ru / иные библиотеки, позволяющие подтвердить уровень публикации."
            },
            {
                type: "text",
                name: "supervisor",
                label: "Укажите ФИО научного руководителя",
                description: "Необязательный вопрос"
            },
            {
                type: "file",
                name: "publication-file",
                label: "Загрузите подтверждающий документ",
                description:
                "Если подтверждающий документ написан на иностранном языке, необходимо также приложить заверенный перевод (п. 2.3 Положения о ПГАС). Приложите всё одним документом. Данное сообщение не распространяется на научные публикации.",
                help:
                "Максимальное число файлов: 1, Максимальный размер одного файла: 10MB, Разрешенные типы файлов: PDF, Изображение"
            },
            {
                type: "radio",
                label:
                "Заявитель несет ответственность за предоставление информации в соответствии с Законодательством Российской Федерации и нормативными локальными актами ДВФУ",
                name: "responsibility",
                options: [{ value: "confirm", label: "Подтверждаю" }]
            }
            ],

            bak: [ // BAK/RSCI
            {
                type: "radio",
                label: "Опубликовано в периодическом издании (и имеет номер ISSN)?",
                name: "issn",
                options: [
                { value: "yes", label: "Да" },
                { value: "no", label: "Нет" }
                ]
            },
            { type: "text", name: "title", label: "Название публикации" },
            { type: "text", name: "output", label: "Выходные данные публикации" },
            {
                type: "radio",
                label: "Количество авторов",
                name: "authors-count",
                description:
                "Укажите точное количество авторов публикации. Обратите внимание - научный руководитель не считается за автора статьи при учете в Портфолио.",
                options: [
                ...Array.from({ length: 10 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
                { value: "other", label: "Другое" }
                ]
            },
            { type: "date", name: "publish-date", label: "Дата публикации материала" },
            {
                type: "text",
                name: "elib-link",
                label: "Укажите ссылку на публикацию в электронной научной библиотеке (elibrary / cyberleninka)",
                description:
                "Ссылка на публикацию в электронной научной библиотеке elibrary.ru / cyberleninka.ru / иные библиотеки, позволяющие подтвердить уровень публикации."
            },
            {
                type: "text",
                name: "supervisor",
                label: "Укажите ФИО научного руководителя",
                description: "Необязательный вопрос"
            },
            {
                type: "file",
                name: "publication-file",
                label: "Загрузите подтверждающий документ",
                description:
                "Если подтверждающий документ написан на иностранном языке, необходимо также приложить заверенный перевод (п. 2.3 Положения о ПГАС). Приложите всё одним документом. Данное сообщение не распространяется на научные публикации.",
                help:
                "Максимальное число файлов: 1, Максимальный размер одного файла: 10MB, Разрешенные типы файлов: PDF, Изображение"
            },
            {
                type: "radio",
                label:
                "Заявитель несет ответственность за предоставление информации в соответствии с Законодательством Российской Федерации и нормативными локальными актами ДВФУ",
                name: "responsibility",
                options: [{ value: "confirm", label: "Подтверждаю" }]
            }
            ],

            "conference-materials": [ // Материалы конференции
            {
                type: "radio",
                label: "Уровень конференции",
                name: "conf-level",
                options: [
                { value: "regional", label: "Региональный" },
                { value: "national", label: "Всероссийский" },
                { value: "international", label: "Международный" }
                ]
            },
            {
                type: "radio",
                label: "Опубликовано в периодическом издании (и имеет номер ISSN)?",
                name: "issn",
                options: [
                { value: "yes", label: "Да" },
                { value: "no", label: "Нет" }
                ]
            },
            { type: "text", name: "title", label: "Название публикации" },
            { type: "text", name: "output", label: "Выходные данные публикации" },
            {
                type: "radio",
                label: "Количество авторов",
                name: "authors-count",
                description:
                "Укажите точное количество авторов публикации. Обратите внимание - научный руководитель не считается за автора статьи при учете в Портфолио.",
                options: [
                ...Array.from({ length: 10 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
                { value: "other", label: "Другое" }
                ]
            },
            { type: "date", name: "publish-date", label: "Дата публикации материала" },
            {
                type: "text",
                name: "elib-link",
                label: "Укажите ссылку на публикацию в электронной научной библиотеке (elibrary / cyberleninka)",
                description:
                "Ссылка на публикацию в электронной научной библиотеке elibrary.ru / cyberleninka.ru / иные библиотеки, позволяющие подтвердить уровень публикации."
            },
            {
                type: "text",
                name: "supervisor",
                label: "Укажите ФИО научного руководителя",
                description: "Необязательный вопрос"
            },
            {
                type: "file",
                name: "publication-file",
                label: "Загрузите подтверждающий документ",
                description:
                "Если подтверждающий документ написан на иностранном языке, необходимо также приложить заверенный перевод (п. 2.3 Положения о ПГАС). Приложите всё одним документом. Данное сообщение не распространяется на научные публикации.",
                help:
                "Максимальное число файлов: 1, Максимальный размер одного файла: 10MB, Разрешенные типы файлов: PDF, Изображение"
            },
            {
                type: "radio",
                label:
                "Заявитель несет ответственность за предоставление информации в соответствии с Законодательством Российской Федерации и нормативными локальными актами ДВФУ",
                name: "responsibility",
                options: [{ value: "confirm", label: "Подтверждаю" }]
            }
            ],

            monograph: [ // Монография
            {
                type: "radio",
                label: "Выберите тип монографии",
                name: "monograph-kind",
                options: [
                { value: "full-authorship", label: "Полное авторство" },
                { value: "chapter", label: "Глава в монографии" },
                { value: "article-in-collection", label: "Статья в сборнике научных статей" }
                ]
            },
            {
                type: "radio",
                label: "Опубликовано в периодическом издании (и имеет номер ISSN)?",
                name: "issn",
                options: [
                { value: "yes", label: "Да" },
                { value: "no", label: "Нет" }
                ]
            },
            { type: "text", name: "title", label: "Название публикации" },
            { type: "text", name: "output", label: "Выходные данные публикации" },
            {
                type: "radio",
                label: "Количество авторов",
                name: "authors-count",
                description:
                "Укажите точное количество авторов публикации. Обратите внимание - научный руководитель не считается за автора статьи при учете в Портфолио.",
                options: [
                ...Array.from({ length: 10 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
                { value: "other", label: "Другое" }
                ]
            },
            { type: "date", name: "publish-date", label: "Дата публикации материала" },
            {
                type: "text",
                name: "elib-link",
                label: "Укажите ссылку на публикацию в электронной научной библиотеке (elibrary / cyberleninka)",
                description:
                "Ссылка на публикацию в электронной научной библиотеке elibrary.ru / cyberleninka.ru / иные библиотеки, позволяющие подтвердить уровень публикации."
            },
            {
                type: "text",
                name: "supervisor",
                label: "Укажите ФИО научного руководителя",
                description: "Необязательный вопрос"
            },
            {
                type: "file",
                name: "publication-file",
                label: "Загрузите подтверждающий документ",
                description:
                "Если подтверждающий документ написан на иностранном языке, необходимо также приложить заверенный перевод (п. 2.3 Положения о ПГАС). Приложите всё одним документом. Данное сообщение не распространяется на научные публикации.",
                help:
                "Максимальное число файлов: 1, Максимальный размер одного файла: 10MB, Разрешенные типы файлов: PDF, Изображение"
            },
            {
                type: "radio",
                label:
                "Заявитель несет ответственность за предоставление информации в соответствии с Законодательством Российской Федерации и нормативными локальными актами ДВФУ",
                name: "responsibility",
                options: [{ value: "confirm", label: "Подтверждаю" }]
            }
            ]
        }
        }
    ]
    },
    
    grant: { // Грант/проект
      label: "Грант/проект",
      fields: [
        { type: "text", name: "grant-name", label: "Тема гранта/ Название гранта/проекта" },
        { type: "text", name: "grant-customer", label: "Заказчик гранта/проекта" },
        { type: "text", name: "grant-leader", label: "Научный руководитель" },
        {
          type: "radio",
          label: "Роль в научном гранте",
          name: "grant-role",
          options: [
            { value: "leader", label: "Руководитель" },
            { value: "executor", label: "Исполнитель" }
          ]
        },
        { type: "date", name: "date-start", label: "Дата начала" },
        { type: "date", name: "date-end", label: "Дата окончания" },
        {
          type: "text",
          name: "grant-link",
          label: "Укажите ссылку, подтверждающую наличие гранта",
          description: "Можно указать ссылку на грантовый конкурс (результаты), ссылку на новость о получении гранта, иное. В случае отсутствия, ставьте прочерк"
        },
        {
          type: "file",
          name: "grant-file",
          label: "Загрузите подтверждающий документ",
          description: "Если подтверждающий документ написан на иностранном языке, необходимо также приложить заверенный перевод (п. 2.3 Положения о ПГАС). Приложите всё одним документом. Данное сообщение не распространяется на научные публикации.",
          help: "Максимальное число файлов: 1, Максимальный размер одного файла: 10MB, Разрешенные типы файлов: PDF, Изображение"
        },
        {
          type: "radio",
          label: "Заявитель несет ответственность за предоставление информации в соответствии с Законодательством Российской Федерации и нормативными локальными актами ДВФУ",
          name: "responsibility",
          options: [{ value: "confirm", label: "Подтверждаю" }]
        }
      ]
    },

    ip: { // Объект интеллектуальной собственности
      label: "Объект интеллектуальной собственности",
      fields: [
        {
          type: "radio",
          label: "Тип ОИС",
          name: "ip-type",
          options: [
            { value: "patent", label: "Патент на полезную модель, изобретение, промышленный образец" },
            { value: "software", label: "Cвидетельство о регистрации программ для ЭВМ, баз данных и ноу-хау" }
          ]
        },
        { type: "text", name: "ip-name", label: "Название ОИС" },
        { type: "text", name: "ip-data", label: "Выходные данные ОИС", description: "№ документа, дата, выдающая организация" },
        { type: "date", name: "ip-publish-date", label: "Дата публикации материала" },
        { type: "date", name: "ip-register-date", label: "Дата занесения ОИС в реестр" },
        { type: "text", name: "ip-link", label: "Укажите ссылку на реестр патентов", help: `<a href="https://www.fips.ru" target="_blank">fips.ru</a>` },
        {
          type: "file",
          description: "Если подтверждающий документ написан на иностранном языке, необходимо также приложить заверенный перевод (п. 2.3 Положения о ПГАС). Приложите всё одним документом. Данное сообщение не распространяется на научные публикации.",
          name: "ip-file",
          label: "Подтверждающий документ",
          help: "Максимальное число файлов: 1, Максимальный размер одного файла: 10MB, Разрешенные типы файлов: PDF, Изображение"
        },
        {
          type: "radio",
          label: "Заявитель несет ответственность за предоставление информации в соответствии с Законодательством Российской Федерации и нормативными локальными актами ДВФУ",
          name: "responsibility",
          options: [{ value: "confirm", label: "Подтверждаю" }]
        }
      ]
    }
  }
};