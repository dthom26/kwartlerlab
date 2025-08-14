const Modal = ({ isOpen, onClose, person }) => {
  if (!isOpen || !person) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-header">
          <img src={person.image} alt={person.name} className="modal-image" />
          <div className="modal-title-section">
            <h2 className="modal-name">{person.name}</h2>
            <p className="modal-position">{person.position}</p>
            {person.email && <p className="modal-email">{person.email}</p>}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-info-section">
            <h4>Degree</h4>
            <p>{person.priorDegree}</p>
          </div>

          <div className="modal-info-section">
            <h4>Joined the Lab</h4>
            <p>{person.joinedLab}</p>
          </div>

          <div className="modal-info-section">
            <h4>Primary Project</h4>
            <p>{person.primaryProject}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
