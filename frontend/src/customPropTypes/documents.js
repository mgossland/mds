import { PropTypes, shape, arrayOf } from "prop-types";

// This file is anticipated to have multiple exports
// eslint-disable-next-line import/prefer-default-export

export const mineDocument = shape({
  mine_document_guid: PropTypes.string.isRequired,
  mine_guid: PropTypes.string,
  document_manager_guid: PropTypes.string,
  document_name: PropTypes.string,
  active_ind: PropTypes.string,
});

export const mineExpectedDocument = shape({
  exp_document_guid: PropTypes.string.isRequired,
  req_document_guid: PropTypes.string,
  mine_guid: PropTypes.string,
  exp_document_name: PropTypes.string,
  exp_document_description: PropTypes.string,
  related_documents: arrayOf(mineDocument),
  received_date: PropTypes.string,
  exp_document_status_guid: PropTypes.string,
  due_date: PropTypes.string,
});

export const documentStatus = shape({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});