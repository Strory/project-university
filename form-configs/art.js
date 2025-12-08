// ТВОРЧЕСКАЯ ДЕЯТЕЛЬНОСТЬ

export default {
  types: {
    art: {
      label: "Творческая деятельность",
      fields: [
        {
          type: "radio",
          label: "Название коллектива, в составе которого принимали участие в творческом мероприятии",
          description: "Если достижение личное, ставьте другое",
          name: "achieve-type",
          options: [
            { value: "academic-choir", label: "Академический хор (руководитель: Петухова Елена Александровна)" },
            { value: "dominanta", label: "Ансамбль барабанщиц «Доминанта» (руководитель: Сучков Иван Васильевич)" },
            { value: "legenda", label: "Ансамбль народного танца «Легенда» (руководитель: Костюкевич Светлана Петровна)" },
            { value: "contrast", label: "Ансамбль современного танца «Контраст» (руководитель: Дмитриева Валентина Викторовна)" },
            { value: "bravissimo", label: "Ансамбль спортивного бального танца «Брависсимо» (руководитель: Паркин Данил Андреевич)" },
            { value: "uni-voice", label: "Вокальный ансамбль «Uni Voice» (руководитель: Разумова Виктория Валерьевна)" },
            { value: "talisman-band", label: "Вокальный ансамбль «Талисман-бэнд» (руководитель: Петрова Маргарита Николаевна)" },
            { value: "chas-pik", label: "Коллектив эстрадного танца «Час Пик» (руководитель: Ковальчук Екатерина Викторовна)" },
            { value: "tech-group", label: "Концертно-техническая группа (руководитель: Никитаев Никита Александрович)" },
            { value: "kvn-league", label: "Лига КВН ДВФУ (руководитель: Мелешко Илья Андреевич)" },
            { value: "international-choir", label: "Международный академический хор (руководитель: Верпеко Михаил Борисович)" },
            { value: "pokrov", label: "Народный хор «Покров» (руководитель: Власова Светлана Васильевна)" },
            { value: "kadry-studio", label: "Студия звукозаписи, видеопроизводства и компьютерной графики Творческой мастерской «Кадры» (руководитель: Кравцов Константин Витальевич)" },
            { value: "paralleli", label: "Студия современного танца «Параллели» (руководитель: Ситникова Елена Александровна)" },
            { value: "kadry-workshop", label: "Творческая мастерская «Кадры» (руководитель: Коваль Павел Владимирович)" },
            { value: "konfetti", label: "Цирковой коллектив «Конфетти» (руководитель: Лазутина Оксана Владимировна)" },
            { value: "first-studio", label: "Студенческий экспериментальный театр «Первая студия» (руководитель: Синицын Иван Васильевич)" },
            { value: "es-masterschool", label: "Школа эстрадно-сценического мастерства (руководитель: Калинина Наталья Ивановна)" },
            { value: "pokolenia-club", label: "Клуб интеллектуального общения «Поколения» (руководитель: Цинцадзе Вячеслав Соломонович)" },
            { value: "other", label: "Другое" }
          ]
        },
        {
          type: "text",
          label: "Название мероприятия",
          description: "Например, «XXX Всероссийский фестиваль «Российская студенческая весна» (г. Самара)».",
          name: "event-name"
        },
        {
          type: "radio",
          label: "Уровень мероприятия",
          name: "achieve-level",
          options: [
            { value: "university", label: "Университетский" },
            { value: "regional", label: "Региональный" },
            { value: "interregional", label: "Межрегиональный (ДВФО)" },
            { value: "national", label: "Всероссийский" },
            { value: "international", label: "Международный" }
          ]
        },
        {
          type: "radio",
          label: "Формат участия",
          name: "achieve-format",
          options: [
            { value: "contest", label: "Участник конкурса" },
            { value: "concert-fest", label: "Участник концерта или фестиваля" },
            { value: "solo-performance", label: "Участник сольного концерта, выставки" },
            { value: "directing-group", label: "Участник режиссёрско-постановочной группы, ведущий" }
          ]
        },
        {
          type: "radio",
          label: "Вид участия в мероприятии",
          name: "achieve-view",
          options: [
            { value: "local", label: "Местное (в пределах населенного пункта, где расположена Ваша образовательная организация)" },
            { value: "out-of-town", label: "Выездное (за пределами населенного пункта, где расположена Ваша образовательная организация)" },
            { value: "remote", label: "Дистанционное (не учитывается как выездное мероприятие)" }
          ]
        },
        { type: "text", label: "Место проведения мероприятия", name: "event-place" },
        { type: "date", label: "Дата начала мероприятия", name: "date-start" },
        { type: "date", label: "Дата окончания мероприятия", name: "date-end" },
        {
          type: "radio",
          label: "Достижение",
          name: "achieve-main",
          options: [
            { value: "participant", label: "Участник" },
            { value: "prizer", label: "Призёр" },
            { value: "winner", label: "Победитель" }
          ]
        },
        {
          type: "radio",
          label: "Статус достижения (призёр)",
          name: "achieve-prizer",
          options: [
            { value: "laureate-ii", label: "Лауреат II степени" },
            { value: "laureate-iii", label: "Лауреат III степени" },
            { value: "place-2", label: "II место" },
            { value: "place-3", label: "III место" },
            { value: "silver-medal", label: "Серебряная медаль" },
            { value: "bronze-medal", label: "Бронзовая медаль" },
            { value: "special-prize", label: "Спецприз" },
            { value: "prizer-other", label: "Другое" }
          ],
          dependsOn: { field: "achieve-main", value: "prizer" }
        },
        {
          type: "radio",
          label: "Статус достижения (победитель)",
          name: "achieve-winner",
          options: [
            { value: "grand-prix", label: "Гран-при" },
            { value: "laureate-i", label: "Лауреат I степени" },
            { value: "place-1", label: "I место" },
            { value: "gold-medal", label: "Золотая медаль" },
            { value: "master-collective", label: "Мастер-коллектив" },
            { value: "winner-other", label: "Другое" }
          ],
          dependsOn: { field: "achieve-main", value: "winner" }
        },
        {
          type: "radio",
          description: "Например, «Иванов Петр Степанович, студент ДВФУ, лауреат I степени…»",
          label: "Отражена ли в подтверждающих документах причастность участника к ДВФУ?",
          name: "involv",
          options: [
            { value: "reflected", label: "Отражена" },
            { value: "not-reflected", label: "Не отражена" }
          ]
        },
        { 
            type: "text",
            description: "При отсутствии ссылки ставьте прочерк",
            label: "Укажите ссылку на мероприятие (результаты, пост-релиз, анонс)",
            name: "event-link"
        },
        {
          type: "file",
          description: "Если документов несколько (грамота, заверенный перевод грамоты и др.), их нужно объединить в один файл.",
          label: "Загрузите подтверждающий документ",
          name: "document",
          help: "Максимальное число файлов: 1, Максимальный размер одного файла:10MB, Разрешенные типы файлов: PDF, Изображение"
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