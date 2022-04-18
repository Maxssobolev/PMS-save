import React from 'react'


/*
*   Этому экшону требуется функция обработчик handler, передаваемый в пропсах
*
*
*/

import { ReactComponent as Icon } from '../../../assets/img/icons/delete.svg'
export default function Delete(props) {
    const handler = props?.handlerDelete
    const customHandlerDelete = props?.customHandlerDelete

    return (
        <div className="action_delete-wrapper">
            <button type='button' title="Delete" className={`action action_delete ${props.customClass}`}
                {
                ...(
                    customHandlerDelete != undefined ?
                        {
                            onClick: () => customHandlerDelete()
                        }
                        :
                        {
                            onFocus: (e) => {
                                e.currentTarget.nextElementSibling.style.display = 'block'
                            },
                            onBlur: (e) => {
                                const el = e.currentTarget
                                setTimeout(() => {
                                    el.nextElementSibling.style.display = 'none'
                                }, 200);
                            }
                        }
                )
                }
            >
                {props.text ? props.text : <Icon />}
            </button>
            <div className="confirmation-wrapper" onClick={() => {
                handler(props.id, props.location, props.local)
            }}>
                <div className="confirm confirm-enter">
                    <blockquote>
                        <p>Confirm Deletion</p>
                    </blockquote>
                </div>
            </div>

        </div>
    )
}