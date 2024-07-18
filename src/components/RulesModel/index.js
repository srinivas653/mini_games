import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
import './index.css'

const RulesModel = props => {
  const {show, clickcloseModel, rules} = props

  const onClickHideModel = () => {
    clickcloseModel()
  }
  return (
    <div>
      <Modal isOpen={show}>
        <div className="modal-container">
          <button data-testid="close" onClick={onClickHideModel} type="button">
            <CgClose className="close-Btn" />
          </button>
          <h1 className="model-Heading">Rules</h1>
          <ul className="model-ul">
            {rules.map(each => (
              <li className="model-li" key={each.id}>
                {each.rule}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  )
}
export default RulesModel
