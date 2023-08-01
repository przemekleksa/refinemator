import { useDispatch } from 'react-redux';
import { addSection } from '../../store/section/actions';
import styles from './AddSection.module.scss';
import { useState } from 'react';
import { Section } from '../../store/section/types';
import { Button } from '../Button/Button';
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';
import { v4 } from 'uuid';

interface Props {
  onClose?: () => void;
}

export const AddSection = ({ onClose }: Props) => {
  const dispatch = useDispatch();
  const initialSectionState: Section = {
    name: '',
    color: '',
    id: '',
    icon: '',
    visibility: '',
  };
  const [sectionData, setSectionData] = useState<Section>(initialSectionState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSectionData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const section = {
      name: data.get('name') as string,
      color: data.get('color') as string,
      id: v4() as string,
    };

    dispatch(addSection(section));
    onClose && onClose();
  };

  const formSchema = yup.object().shape({
    name: yup.string().required('Name is required').max(20, 'Name is too long'),
    color: yup.string().required('Color is required'),
    id: yup.string().required('ID is required'),
    // You can add more validation rules for other fields if needed
  });

  const colorOptions = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Aqua', value: 'aqua' },
    { label: 'Magenta', value: 'magenta' },
    { label: 'Silver', value: 'silver' },
    { label: 'Gray', value: 'gray' },
    { label: 'Maroon', value: 'maroon' },
    { label: 'Olive', value: 'olive' },
    { label: 'Lime', value: 'lime' },
    { label: 'Purple', value: 'purple' },
    { label: 'Teal', value: 'teal' },
    { label: 'Navy', value: 'navy' },
    { label: 'Orange', value: 'orange' },
    { label: 'White', value: 'white' },
  ];

  return (
    <Formik
      initialValues={{
        name: '',
        color: '',
      }}
      validationSchema={formSchema}
      onSubmit={values => {
        console.log('Form values:', values);
      }}
    >
      <form onSubmit={handleSubmit} className={styles.root}>
        <div>
          <label>Name:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>Color:</label>
          <Field as="select" name="color">
            <option value="">Select a color</option>
            {colorOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>
          <ErrorMessage name="color" component="div" />
        </div>
        <div>
          <label>Icon:</label>
          <input type="text" name="icon" value={sectionData.icon} onChange={handleChange} />
        </div>
        <Button type="submit" color="secondary">
          Add Section
        </Button>
      </form>
    </Formik>
  );
};
