class Calendar {
  //в конструктор передаем ай-ди контейнера, куда хотим поместить виджет
  //month и events - массивы объектов, структуры см. в main.js
  constructor (id = 'calendar', months = [], events = []) {
    this.id = id;
    this.months = months || [];
    this.events = events || [];
    this.container = $(`#${id}`);
    this.container.attr('class', 'calendar');
    this.monthSelectedName = this.months[0].name;
    this.monthSelectedNum = this.months[0].num;
    this.year = 2017;
  }
  
  // создаем календарь => some var = new Calendar(params); var.init();
  init () {
    $.when(this.getHeader())
    .then(() => { this.getFilter(); })
    .then(() => { this.getTableCell(0); })
    .then(() => { this.initFilterHandler(); })
    .then(() => { this.initAddHandler() });
  }
  
  
  //календарь состоит из 3х частей: хедер, фильтр, грид
  
  //создаем хедер
  getHeader () {
    $.ajax({
      url: './calendar/temp/header.html',
      success: (result) => {
        this.container.append(result);
      }
    });
  }
  
  //создаем фильтр
  getFilter () {
    $.ajax({
      url: './calendar/temp/filter.html',
      success: (result) => {
        this.container.append(result);
      }
    });
  }
  
  //создаем грид
  getTableCell (monthNum) {
    $.ajax({
      url: './calendar/temp/tableCell.html',
      success: (result) => {
        this.container.append(result);
        months[monthNum] = months[monthNum] || {};
        months[monthNum].days.map((day) => {
          this.container.find(`#table`).append(`<div class='calendar__cell' id=${day}${months[monthNum].name}2017>${day}</div>`);
          this.events.map((event) => {
            if(event.month == months[monthNum].name && event.day == day) {
              $(`#${day}${months[monthNum].name}2017`).append(`<br><b>${event.participant}</b><br>${event.description}`);
              $(`#${day}${months[monthNum].name}2017`).css('background', '#c2e4fe');
            }
          });
        });
      }
    });
  }
  
  //вешаем обработчики изменения месяца
  initFilterHandler () {
    $(`#prevMonth`).click(() => {
      this.setNextMonth (-1);
    });
    $(`#nextMonth`).click(() => {
      this.setNextMonth (1);
    });
  }
  
  //ноу комментс
  initAddHandler () {
    $(`#add`).click(() => {
      $(`#pop-up`).toggle();
    });
  }
  
  //обновление грида, входящий параметр 1 или -1
  setNextMonth (incOrDec) {
    for(var i in this.months) {
      if(this.months[i].num === $(`#date`).data(`month-num`)+incOrDec) {
        $(`#date`).data(`month-num`, $(`#date`).data(`month-num`)+incOrDec);
        $(`#date`).html(`${this.months[i].name} ${this.year}`);
        this.monthSelectedName = this.months[i].name;
        this.monthSelectedNum = this.months[i].num;
        $(`#table`).remove();
        this.getTableCell(this.monthSelectedNum-1);
        break;
      }
    }
  }
  
}

