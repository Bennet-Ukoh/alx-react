import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  
  const headerRowStyle = {
    backgroundColor: isHeader ? '#deb5b545' : '',
  }

  const dataRowStyle = {
    backgroundColor: isHeader ? '' : '#f5f5f5ab'
  }

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={headerRowStyle}>
          <th colSpan={2} >{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={headerRowStyle}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={dataRowStyle}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;

