// ОБЩЕСТВЕННАЯ ДЕЯТЕЛЬНОСТЬ

export default {
  types: {
    social: {
      label: "Общественная деятельность",
      fields: [
        { 
          type: "text", 
          name: "event-name", 
          label: "Название общественного мероприятия" 
        },
        { 
          type: "text", 
          name: "organizer", 
          label: "Организатор мероприятия", 
          description: "Например: Студенческий совет ШЭМ, Модель ООН на Дальнем Востоке, Клуб Дебатов" 
        },
        { 
          type: "text", 
          name: "partners", 
          label: "Партнёры мероприятия", 
          description: "Необязательный вопрос, можете перечислить 1-2 главных партнера и спонсора вне ДВФУ." 
        },
        { 
          type: "radio", 
          name: "event-level", 
          label: "Уровень мероприятия", 
          options: [
            { value: "university", label: "Университетский" },
            { value: "city", label: "Городской" },
            { value: "regional", label: "Региональный" },
            { value: "rf", label: "Всероссийский" },
            { value: "international", label: "Международный" }
          ]
        },
        { 
          type: "date", 
          name: "date-start", 
          label: "Дата проведения - начало" 
        },
        { 
          type: "date", 
          name: "date-end", 
          label: "Дата проведения - окончание" 
        },
        { 
          type: "radio", 
          name: "role", 
          label: "Ваша роль в мероприятии", 
          options: [
            { value: "participant", label: "Участник" },
            { value: "volunteer", label: "Волонтер" },
            { value: "performer", label: "Исполнитель" },
            { value: "organizer", label: "Организатор" },
            { value: "leader", label: "Руководитель" }
          ]
        },
        { 
          type: "radio", 
          name: "num-participants", 
          label: "Количество участников мероприятия", 
          options: [
            { value: "10-50", label: "10-50" },
            { value: "51-100", label: "51-100" },
            { value: "101-500", label: "101-500" },
            { value: "500+", label: "Более 500" }
          ]
        },
        { 
          type: "text", 
          name: "link", 
          label: "Ссылка на фотоотчет/пост-релиз", 
          description: "Принимается только одна ссылка" 
        },
        { 
          type: "file", 
          name: "social-file", 
          label: "Подтверждающий документ", 
          description: "Скан книжки общественника, сертификат, грамота и т.д. Если документов много, используйте многостраничный pdf или изображение. Для сканирования документов при помощи телефона удобно использовать специальные программы для создания pdf. Если подтверждающий документ написан на иностранном языке, необходимо также приложить заверенный перевод.", 
          help: "Максимальное число файлов: 1, Максимальный размер одного файла: 10MB, Разрешенные типы файлов: PDF, Изображение"
        },
        { 
          type: "radio", 
          name: "responsibility", 
          label: "Заявитель несет ответственность за предоставление информации в соответствии с Законодательством Российской Федерации и нормативными локальными актами ДВФУ", 
          options: [
            { value: "confirm", label: "Подтверждаю" }
          ]
        }
      ]
    }
  }
};