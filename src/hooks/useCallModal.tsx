import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'

export function useCallModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div>
      <Modal isOpen={isModalOpen} onClear={() => setIsModalOpen((p) => !p)}>
        <Modal.Header></Modal.Header>
        <Modal.Content></Modal.Content>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  )
}
