import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ onFilter, filter }) => {
  return (
    <div className={s.filter}>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={onFilter} value={filter} />
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
