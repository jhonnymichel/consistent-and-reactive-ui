import React from 'react';
import classNames from 'classnames';
import Icon from 'components/icon';

const PaginationButton = ({ disabled, active, onClick, text }) => (
  <button
    className={classNames(
      'pagination-button',
      { active }
    )}
    disabled={ disabled }
    onClick={onClick}
  >
    {text}
  </button>
);

const Pagination = ({ isLoading, page, pages, changePage }) => (
  <div className="pagination">
    <PaginationButton
      disabled={isLoading || page === 1}
      onClick={() => changePage(page - 1)}
      text={<Icon>chevron_left</Icon>}
    />
    {Array(pages).fill().map((_, i) => (
      <PaginationButton
        key={i}
        disabled={isLoading}
        active={page === i + 1}
        onClick={() => changePage(i + 1)}
        text={i + 1}
      />
    ))}
    <PaginationButton
      disabled={isLoading || page === pages}
      onClick={() => changePage(page + 1)}
      text={<Icon>chevron_right</Icon>}
    />
  </div>
);

export default Pagination;
