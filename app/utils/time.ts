import {
    differenceInMilliseconds,
    format,
    formatDistanceToNow,
} from "date-fns";
import { zhCN } from "date-fns/locale";

export function getLocaleDatetime(date?: string | Date) {
    if (!date) return "";

    if (typeof date === "string") date = new Date(date);

    return format(date, "yyyy年M月d日 E HH:mm:ss", { locale: zhCN });
}
export function getPostDate(date?: string | Date) {
    if (!date) return "";

    const now = new Date();

    const isWithinAWeek =
        differenceInMilliseconds(now, date) < 1000 * 60 * 60 * 24 * 7;
    if (isWithinAWeek) {
        return formatDistanceToNow(date, { addSuffix: true, locale: zhCN });
    } else if (isSameYear(now, date)) {
        return format(date, "M月d日");
    } else {
        return format(date, "yy年M月d日");
    }
}

export function getReadingTime(ms: number): string {
    return formatDistanceToNow(new Date().getTime() - ms, { locale: zhCN });
}

export function isTimeDiffSignificant(
    date1?: string | Date,
    date2?: string | Date,
    // 对于时间差的敏感程度，0~1 之间
    threshold: number = 0.6
) {
    if (!date1 || !date2) return false;

    const now = new Date();

    const diff1 = differenceInMilliseconds(now, date1);
    const diff2 = differenceInMilliseconds(now, date2);
    return diff1 / diff2 < threshold || diff2 / diff1 < threshold;
}

export function isSameYear(date1?: string | Date, date2?: string | Date) {
    if (!date1 || !date2) return false;
    if (typeof date1 === "string") date1 = new Date(date1);
    if (typeof date2 === "string") date2 = new Date(date2);
    return date1.getFullYear() === date2.getFullYear();
}

export function timeElapse(date?: Date | string, maxDepth = 2) {
    if (!date) return "";
    if (typeof date === "string") date = new Date(date);
    const msecPast = Date.now() - date.getTime();
    const intervals = [
        { label: "世纪", threshold: 1000 * 60 * 60 * 24 * 365.2422 * 100 },
        { label: "年", threshold: 1000 * 60 * 60 * 24 * 365.2422 },
        { label: "个月", threshold: 1000 * 60 * 60 * 24 * 30.44 },
        { label: "天", threshold: 1000 * 60 * 60 * 24 },
        { label: "小时", threshold: 1000 * 60 * 60 },
        { label: "分钟", threshold: 1000 * 60 },
    ];
    let timeString = "";
    let msecRemained = msecPast;
    for (const interval of intervals) {
        const count = Math.floor(msecRemained / interval.threshold);
        if (count <= 0) continue;
        timeString += `${count}${interval.label}`;
        msecRemained -= count * interval.threshold;
        if (--maxDepth <= 0) break;
    }
    return timeString || "刚刚";
}

// 时间单位常量
const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
// 时间计算函数
export function calculateTime(date: Date = new Date()): {
    year: number;
    dayOfYear: number;
    yearProgress: string;
} {
    const now = new Date(date); // 当前时间
    const year = now.getFullYear();

    const startOfYear = new Date(year, 0, 1);
    const startOfNextYear = new Date(year + 1, 0, 1);

    const daysInYear =
        (startOfNextYear.getTime() - startOfYear.getTime()) /
        MILLISECONDS_IN_A_DAY;

    // 今天是今年的第几天
    const dayOfYear = Math.ceil(
        (now.getTime() - startOfYear.getTime()) / MILLISECONDS_IN_A_DAY
    );

    // 今年已过百分比
    const yearProgress = ((dayOfYear / daysInYear) * 100).toFixed(5);

    return {
        year,
        dayOfYear,
        yearProgress,
    };
}
export function getDayProgress(): string {
    const now = new Date(); // 当前时间
    const year = now.getFullYear();
    // 计算今天已过百分比
    const startOfDay = new Date(year, now.getMonth(), now.getDate());
    const endOfDay = new Date(year, now.getMonth(), now.getDate() + 1);
    const dayProgress = (
        ((now.getTime() - startOfDay.getTime()) /
            (endOfDay.getTime() - startOfDay.getTime())) *
        100
    ).toFixed(5);
    return  dayProgress;
}
