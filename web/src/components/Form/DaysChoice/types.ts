export interface IDaysChoice {
  weekDaysMock: Array<{
    value: string;
    title: string;
    text: string;
  }>;
  weekDaysSelectedValue: Array<string>;
  onWeekDaysChange: (weekDaysSelected: Array<string>) => void;
}
