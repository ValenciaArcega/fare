import { Bounce, toast } from "react-toastify"
import { timeMsgMedium } from "../constants/time"

export const useToast = () => {

	const toastSuccess = msg => toast.success(msg, {
		position: "top-right",
		autoClose: timeMsgMedium,
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		theme: "light",
		transition: Bounce,
	})

	const toastError = msg => toast.error(msg, {
		position: "top-right",
		autoClose: timeMsgMedium,
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		theme: "light",
		transition: Bounce,
	})

	const toastLoading = msg => toast.loading(msg, {
		position: "top-center",
		autoClose: timeMsgMedium,
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		progress: true,
		theme: "light",
		transition: Bounce,
	})

	return { toastSuccess, toastError, toastLoading }
}