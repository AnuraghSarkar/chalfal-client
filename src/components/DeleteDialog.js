import { useState } from "react";


const DeleteDialog = ({ title, handleDelete, handleMenuClose, type }) => { 
      const [open, setOpen] = useState(false);

      const handleClickOpen = () => {
        setOpen(true);
        if (type !== "comment" && type !== "avatar") {
          handleMenuClose();
        }
      };

      const handleClose = () => {
        setOpen(false);
      };

      const handleActionClick = () => {
        handleDelete();
        handleClose();
      };
};

export default DeleteDialog;