import React from "react";
import Modal from "react-modal";
import dayjs from "dayjs";

export default function DeleteRedactorModal(props) {
  const { deleteRedactorModal, toggleConfirmDeleteModal, redactorToDelete, handleDeleteRedactor, deletingRedactor, deleteErrMsg } = props;

  return (
    <Modal
      isOpen={deleteRedactorModal}
      shouldReturnFocusAfterClose={false}
      onRequestClose={() => { toggleConfirmDeleteModal({}); }}
      ariaHideApp={false}
      contentLabel="Modal"
      className="Modal DefaultSize"
    >
      <div className="Modal-body">
        <div className="flex flex-column">
          <p className="u-fontSize--largest u-fontWeight--bold u-color--tuna u-lineHeight--normal u-marginBottom--more">
            Delete redactor
              </p>
          {deleteErrMsg ?
            <p className="u-color--chestnut u-fontSize--small u-fontWeight--medium u-lineHeight--normal">{deleteErrMsg}</p>
            : null}
          <p className="u-fontSize--normal u-fontWeight--normal u-color--dustyGray u-lineHeight--normal">
            Are you sure you want to delete this redactor? This action cannot be reversed.
              </p>
          <div className="flex flex1 justifyContent--spaceBetween u-marginTop--20">
            <div className="flex flex-column">
              <p className="u-fontSize--normal u-fontWeight--bold u-color--tuna u-lineHeight--normal">{redactorToDelete?.name}</p>
              <p className="u-fontSize--normal u-color--doveGray u-fontWeight--bold u-lineHeight--normal u-marginRight--20">Last updated on {dayjs(redactorToDelete?.updatedOn).format("MM/DD/YY @ hh:mm a")}</p>
            </div>
          </div>
          <div className="flex justifyContent--flexStart u-marginTop--20">
            <button
              className="btn secondary blue u-marginRight--10"
              onClick={() => { toggleConfirmDeleteModal({}); }}
            >
              Cancel
                </button>
            <button
              className="btn primary red"
              disabled={deletingRedactor}
              onClick={() => { handleDeleteRedactor(redactorToDelete) }}
            >
              {deletingRedactor ? "Deleting" : "Delete redactor"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}