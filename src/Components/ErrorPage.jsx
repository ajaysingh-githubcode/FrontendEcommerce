import React from 'react'
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
  let { error, status, statusText } = useRouteError();
  return (
    <div className="py-2 px-2 mt-1">
    <div role="alert" className="alert alert-error w-full">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24">
      <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h1>
      {<span>This is an Error. {error.message} {"  "}{status}{" "}{" "}{statusText}</span>}
      </h1>
      </div>
      </div>
  )
}

export default ErrorPage
