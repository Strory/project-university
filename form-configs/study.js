// УЧЕБНАЯ ДЕЯТЕЛЬНОСТЬ

export default {
  types: {
    study: {
      label: "Учебная деятельность",
      fields: [
        {
          type: "text",
          name: "study-name",
          label: "Название мероприятия"
        },
        {
          type: "radio",
          name: "study-main-type",
          label: "Тип мероприятия",
          options: [
            { value: "olympiad", label: "Олимпиада/конкурс" },
            { value: "award", label: "Получение награды/приза за результаты проектной деятельности и/или опытно-конструкторской работы" },
            { value: "exam", label: "Демонстрационный экзамен" },
            { value: "training", label: "Повышение квалификации/проф. переподготовка" },
            { value: "extra-edu", label: "Дополнительное образование" },
            { value: "career-day", label: "День карьеры" },
            { value: "scholarship", label: "Именная стипендия" },
            { value: "internship", label: "Стажировка" },
            { value: "thanks", label: "Благодарность за участие в учебном мероприятии" }
          ],
          subfields: {
            olympiad: [ // Олимпиада/конкурс
              {
                type: "radio",
                name: "study-participation-format",
                label: "Формат участия",
                description: "Выберите подходящий вариант из предлагаемых. Для именных стипендий - участник.",
                options: [
                  { value: "participant", label: "Участник/Обучающийся" },
                  { value: "speaker", label: "Докладчик" },
                  { value: "prizer", label: "Призёр" },
                  { value: "winner", label: "Победитель" },
                  { value: "medalist", label: "Медалист" },
                  { value: "thanks", label: "Благодарность" },
                  { value: "other", label: "Другое" }
                ]
              },
              {
                type: "radio",
                name: "study-level",
                label: "Уровень мероприятия",
                options: [
                  { value: "university", label: "Университетский" },
                  { value: "regional", label: "Региональный" },
                  { value: "dvfo", label: "Межрегиональный (ДВФО)" },
                  { value: "rf", label: "Всероссийский" },
                  { value: "international", label: "Международный" }
                ]
              }
            ],
            award: [ // Получение награды/приза за результаты проектной деятельности и/или опытно-конструкторской работы
              {
                type: "radio",
                name: "study-participation-format",
                label: "Формат участия",
                description: "Выберите подходящий вариант из предлагаемых. Для именных стипендий - участник.",
                options: [
                  { value: "participant", label: "Участник/Обучающийся" },
                  { value: "speaker", label: "Докладчик" },
                  { value: "prizer", label: "Призёр" },
                  { value: "winner", label: "Победитель" },
                  { value: "medalist", label: "Медалист" },
                  { value: "thanks", label: "Благодарность" },
                  { value: "other", label: "Другое" }
                ]
              },
              {
                type: "radio",
                name: "study-level",
                label: "Уровень мероприятия",
                options: [
                  { value: "university", label: "Университетский" },
                  { value: "regional", label: "Региональный" },
                  { value: "dvfo", label: "Межрегиональный (ДВФО)" },
                  { value: "rf", label: "Всероссийский" },
                  { value: "international", label: "Международный" }
                ]
              }
            ],
            exam: [ // Демонстрационный экзамен
              {
                type: "radio",
                name: "study-participation-format",
                label: "Формат участия",
                description: "Выберите подходящий вариант из предлагаемых. Для именных стипендий - участник.",
                options: [
                  { value: "participant", label: "Участник/Обучающийся" },
                  { value: "speaker", label: "Докладчик" },
                  { value: "thanks", label: "Благодарность" },
                  { value: "other", label: "Другое" }
                ]
              }
            ],
            training: [ // Повышение квалификации/проф. переподготовка
              {
                type: "radio",
                name: "study-participation-format",
                label: "Формат участия",
                description: "Выберите подходящий вариант из предлагаемых. Для именных стипендий - участник.",
                options: [
                  { value: "participant", label: "Участник/Обучающийся" },
                  { value: "speaker", label: "Докладчик" },
                  { value: "thanks", label: "Благодарность" },
                  { value: "other", label: "Другое" }
                ]
              }
            ],
            "extra-edu": [ // Дополнительное образование
              {
                type: "radio",
                name: "study-participation-format",
                label: "Формат участия",
                description: "Выберите подходящий вариант из предлагаемых. Для именных стипендий - участник.",
                options: [
                  { value: "participant", label: "Участник/Обучающийся" },
                  { value: "speaker", label: "Докладчик" },
                  { value: "thanks", label: "Благодарность" },
                  { value: "other", label: "Другое" }
                ]
              }
            ],
            "career-day": [ // День карьеры
              {
                type: "radio",
                name: "study-participation-format",
                label: "Формат участия",
                description: "Выберите подходящий вариант из предлагаемых. Для именных стипендий - участник.",
                options: [
                  { value: "participant", label: "Участник/Обучающийся" },
                  { value: "speaker", label: "Докладчик" },
                  { value: "thanks", label: "Благодарность" },
                  { value: "other", label: "Другое" }
                ]
              }
            ],
            scholarship: [ // Именная стипендия
              {
                type: "radio",
                name: "study-participation-format",
                label: "Формат участия",
                description: "Выберите подходящий вариант из предлагаемых. Для именных стипендий - участник.",
                options: [
                  { value: "participant", label: "Участник/Обучающийся" },
                  { value: "speaker", label: "Докладчик" },
                  { value: "thanks", label: "Благодарность" },
                  { value: "other", label: "Другое" }
                ]
              }
            ],
            internship: [ // Стажировка
              {
                type: "radio",
                name: "study-participation-format",
                label: "Формат участия",
                description: "Выберите подходящий вариант из предлагаемых. Для именных стипендий - участник.",
                options: [
                  { value: "participant", label: "Участник/Обучающийся" },
                  { value: "speaker", label: "Докладчик" },
                  { value: "thanks", label: "Благодарность" },
                  { value: "other", label: "Другое" }
                ]
              }
            ],
            thanks: [ // Благодарность за участие в учебном мероприятии
              {
                type: "radio",
                name: "study-participation-format",
                label: "Формат участия",
                description: "Выберите подходящий вариант из предлагаемых. Для именных стипендий - участник.",
                options: [
                  { value: "participant", label: "Участник/Обучающийся" },
                  { value: "speaker", label: "Докладчик" },
                  { value: "thanks", label: "Благодарность" },
                  { value: "other", label: "Другое" }
                ]
              }
            ]
          }
        },
        {
          type: "date",
          name: "study-start-date",
          label: "Дата проведения - начало"
        },
        {
          type: "date",
          name: "study-end-date",
          label: "Дата проведения - окончание"
        },
        {
          type: "text",
          name: "study-place",
          label: "Место проведения",
          description: "Город и/или площадка"
        },
        {
          type: "text",
          name: "study-achievement",
          label: "Достижение",
          description: "Например: завершение курса с отличием, 1 место в олимпиаде, стипендия в номинации и т.д."
        },
        {
          type: "radio",
          name: "study-type",
          label: "Тип достижения",
          options: [
            { value: "team", label: "Командное достижение" },
            { value: "personal", label: "Личное достижение" }
          ]
        },
        {
          type: "file",
          name: "study-file",
          label: "Подтверждающий документ",
          description: "Сертификат об участии, грамота и т.д. Если документов много, используйте pdf или архив. Для сканирования документов при помощи телефона можно использовать специальные программы для создания pdf. Если подтверждающий документ написан на иностранном языке, необходимо также приложить заверенный перевод",
          help: "Максимальное число файлов: 1, Максимальный размер одного файла: 10MB, Разрешенные типы: PDF, Изображение"
        },
        {
          type: "radio",
          name: "study-confirm",
          label: "Заявитель несёт ответственность за предоставление информации в соответствии с законодательством Российской Федерации и нормативными локальными актами ДВФУ",
          options: [{ value: "confirm", label: "Подтверждаю" }]
        }
      ]
    }
  }
};