import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    whatsapp: '',
    projectName: '',
    description: '',
  });
  
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(() => {
      alert('Appointment booked successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        whatsapp: '',
        projectName: '',
        description: '',
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error booking your appointment.');
    })
    .finally(() => {
      setSubmitting(false);
    });
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#appointmentModal">
        Book Appointment
      </button>

      {/* Modal */}
      <div className="modal fade" id="appointmentModal" tabIndex="-1" aria-labelledby="appointmentModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="appointmentModalLabel">Book an Appointment</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email ID</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="whatsapp" className="form-label">WhatsApp Number</label>
                  <input type="tel" className="form-control" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="projectName" className="form-label">Project Name</label>
                  <input type="text" className="form-control" id="projectName" name="projectName" value={formData.projectName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
