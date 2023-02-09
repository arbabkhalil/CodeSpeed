import React, { ChangeEvent } from "react";
type Props = {
  disabled: boolean;
  language: string;
  onChange: (languageSelected: string) => void;
};

const LanguageSelector: React.FC<Props> = (props) => (
  <div className="md:flex-initial w-full md:w-1/2 lg:w-1/3 md:ml-3 ml:0">
    <select
      value={props.language}
      disabled={props.disabled}
      onChange={(event: ChangeEvent<HTMLSelectElement>) =>
        props.onChange(event.target.value)
      }
      className="w-full rounded appearance-none bg-white border-2 border-indigo-300 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-7"
    >
      <option value="k8s">Kubernetes</option>
      <option value="py">Python</option>
      <option value="linux">Linux</option>
      <option value="easy_en">English</option>
    </select>
  </div>
);

export default LanguageSelector;
