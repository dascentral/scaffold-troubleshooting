import PropTypes from 'prop-types';
import clsx from 'clsx';

export const SampleComponent = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <p>SampleComponent</p>
    </div>
  );
};

SampleComponent.propTypes = {
  className: PropTypes.string,
};

export default SampleComponent;
