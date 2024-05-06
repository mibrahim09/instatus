import moment from "moment";

export const formatDate = (dateString) => {
    const date = moment(dateString);
    return date.format("MMM D, h:mm A");
}
