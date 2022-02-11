import moment from "moment";
import { DATE_FORMAT } from "./constants";

export const formatDateTime = (date: any) => {
    const convertedDate = moment(date, DATE_FORMAT, true);
    return convertedDate.fromNow();
}