import dayjs from "dayjs";

export const addMonthByNumber = ({ currentMonth, currentYear, addMonthBy }: { currentMonth: number; currentYear: number; addMonthBy: number }) => {
	const date = new Date(currentYear, currentMonth + addMonthBy, 1);
	return {
		month: dayjs(date).month(),
		year: dayjs(date).year(),
	};
};
