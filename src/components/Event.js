import React, { useContext } from "react"
import { DELETE_EVENT, ADD_OPERATION_LOG } from "../actions"
import AppContext from "../contexts/AppContext"
import { timeCurrentIso8601 } from "../utils"
const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `イベントid:${id}を本当に削除しても良いですか？`
    )
    if (result) {
      dispatch({ type: DELETE_EVENT, id })

      dispatch({
        type: ADD_OPERATION_LOG,
        description: `id:${id}イベントを削除しました`,
      })
    }
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  )
}

export default Event
