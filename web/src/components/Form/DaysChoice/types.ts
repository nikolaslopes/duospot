export interface IDaysChoice {
  weekDays: Array<{
    value: string;
    title: string;
    text: string;
  }>;
  weekDaysSelected: Array<string>;
  onWeekDaysChange: (weekDaysSelected: Array<string>) => void;
}
