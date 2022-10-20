import PropTypes from 'prop-types';
import clsx from 'clsx';

export const SampleComponent = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <p className="text-red-500">SampleComponent</p>
    </div>
  );
};

SampleComponent.propTypes = {
  className: PropTypes.string,
};

export default SampleComponent;
