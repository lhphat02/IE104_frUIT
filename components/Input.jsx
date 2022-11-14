import React from 'react'

const Input = ({inputType, title}) => {
  return (
    <div className="mt-10 w-full">
      <div>
        <p className="font-poppins text-xl minlg:text-4xl font-semibold sm:mb-4">
        test
        {title}
        </p>
      </div>

      {inputType === "number" ? (
        <div>
          <input type="number" className="w-full" />
        </div>
      ) : inputType === "textarea" ? (
        <div>
          <input type="textarea" className="w-full" />
        </div>
      ) : (
        <div>
          <input className="w-full" />
        </div>
      )}
    </div>
  );
}

export default Input