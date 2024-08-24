describe("getWeekDay", function () {
  it("3 January 2014 - friday", function () {
    assert.equal(getWeekDay(new Date(2014, 0, 3)), "FR");
  });

  it("4 January 2014 - saturday", function () {
    assert.equal(getWeekDay(new Date(2014, 0, 4)), "SA");
  });

  it("5 January 2014 - sunday", function () {
    assert.equal(getWeekDay(new Date(2014, 0, 5)), "SU");
  });

  it("6 January 2014 - monday", function () {
    assert.equal(getWeekDay(new Date(2014, 0, 6)), "MO");
  });

  it("7 January 2014 - tuesday", function () {
    assert.equal(getWeekDay(new Date(2014, 0, 7)), "TU");
  });

  it("8 January 2014 - wednesday", function () {
    assert.equal(getWeekDay(new Date(2014, 0, 8)), "WE");
  });

  it("9 January 2014 - thursday", function () {
    assert.equal(getWeekDay(new Date(2014, 0, 9)), "TH");
  });
});

describe('getLocalDay returns the "european" weekday', function () {
  it("3 January 2014 - friday", function () {
    assert.equal(getLocalDay(new Date(2014, 0, 3)), 5);
  });

  it("4 January 2014 - saturday", function () {
    assert.equal(getLocalDay(new Date(2014, 0, 4)), 6);
  });

  it("5 January 2014 - sunday", function () {
    assert.equal(getLocalDay(new Date(2014, 0, 5)), 7);
  });

  it("6 January 2014 - monday", function () {
    assert.equal(getLocalDay(new Date(2014, 0, 6)), 1);
  });

  it("7 January 2014 - tuesday", function () {
    assert.equal(getLocalDay(new Date(2014, 0, 7)), 2);
  });

  it("8 January 2014 - wednesday", function () {
    assert.equal(getLocalDay(new Date(2014, 0, 8)), 3);
  });

  it("9 January 2014 - thursday", function () {
    assert.equal(getLocalDay(new Date(2014, 0, 9)), 4);
  });
});

describe("getDateAgo", function () {
  it("1 day before 02.01.2015 -> day 1", function () {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1);
  });

  it("2 days before 02.01.2015 -> day 31", function () {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31);
  });

  it("100 days before 02.01.2015 -> day 24", function () {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24);
  });

  it("365 days before 02.01.2015 -> day 2", function () {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
  });

  it("does not modify the given date", function () {
    let date = new Date(2015, 0, 2);
    let dateCopy = new Date(date);
    getDateAgo(dateCopy, 100);
    assert.equal(date.getTime(), dateCopy.getTime());
  });
});

describe("getLastDayOfMonth", function () {
  it("last day of 01.01.2012 - 31", function () {
    assert.equal(getLastDayOfMonth(2012, 0), 31);
  });

  it("last day of 01.02.2012 - 29 (leap year)", function () {
    assert.equal(getLastDayOfMonth(2012, 1), 29);
  });

  it("last day of 01.02.2013 - 28", function () {
    assert.equal(getLastDayOfMonth(2013, 1), 28);
  });
});

describe("formatDate", function () {
  it('shows 1ms ago as "right now"', function () {
    assert.equal(formatDate(new Date(new Date() - 1)), "right now");
  });

  it('"30 seconds ago"', function () {
    assert.equal(formatDate(new Date(new Date() - 30 * 1000)), "30 sec. ago");
  });

  it('"5 minutes ago"', function () {
    assert.equal(formatDate(new Date(new Date() - 5 * 60 * 1000)), "5 min. ago");
  });

  it("older dates as DD.MM.YY HH:mm", function () {
    assert.equal(formatDate(new Date(2014, 2, 1, 11, 22, 33)), "01.03.14 11:22");
  });
});
