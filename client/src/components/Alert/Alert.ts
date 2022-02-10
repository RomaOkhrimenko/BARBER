
import {toast} from 'react-toastify'

export const notlifySuccess = (text: string) => toast.success(text, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
})