import React, { useState } from 'react';

export const useForm = (): [Map<string, string>, (event: React.ChangeEvent<HTMLInputElement>, fieldName?: string) => void] => {
    const [formData, setFormData] = useState<Map<string, string>>(new Map());

    const fillForm = (event: React.ChangeEvent<HTMLInputElement>, fieldName?: string) => {
        fieldName = fieldName || event.target.name;

        const newFormData = new Map(formData.set(fieldName, event.target.value));

        setFormData(newFormData);
    };

    return [formData, fillForm];
};
