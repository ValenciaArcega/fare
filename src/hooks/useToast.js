import { Bounce, toast } from "react-toastify"

export const useToast = () => {

	const toastSuccess = msg => toast.success(msg, {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		theme: "light",
		transition: Bounce,
	})

	const toastError = msg => toast.error(msg, {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		theme: "light",
		transition: Bounce,
	})

	const toastLoading = msg => toast.loading(msg, {
		position: "top-center",
		autoClose: 5000,
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