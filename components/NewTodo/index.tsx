"use client";

import Button from "../Button";
import Modal from "../Modal";
import styles from "@/styles/NewTodo.module.scss";
import stylesModal from "@/styles/Modal.module.scss";
import Notification from "../Notification";
import Form from "../Form";
import { useNewTodo } from "@/hook/useNewTodo";

export default function NewTodo() {
  const {
    description,
    errors,
    loading,
    isModalOpen,
    notifications,
    handleOpenModal,
    handleCloseModal,
    handleInputChange,
    handleAddTodo,
    removeNotification,
  } = useNewTodo();

  return (
    <div>
      <div className={styles.buttonAddContainer}>
        <Button
          label="Adicionar nova tarefa"
          onClick={handleOpenModal}
          variant="primary"
          disabled={loading}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className={stylesModal.containerContent}>
          <div className={stylesModal.containerText}>
            <h2 className={stylesModal.modalTitle}>Adicionar tarefa</h2>
          </div>
          <Form>
            <div className={styles.modalForm} style={{ position: "relative" }}>
              <label className={styles.labelAddTodo}>Título</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Digite"
                value={description}
                onChange={handleInputChange}
              />
              {errors && (
                <p
                  style={{
                    color: "red",
                    position: "absolute",
                    bottom: -10,
                    fontSize: "12px",
                  }}
                >
                  {errors}
                </p>
              )}
            </div>
            <div className={stylesModal.modalActions}>
              <Button
                label="Cancelar"
                onClick={handleCloseModal}
                variant="secondary"
                disabled={loading}
              />
              <Button
                label={loading ? "Adicionando..." : "Adicionar"}
                onClick={handleAddTodo}
                variant="primary"
                disabled={loading}
              />
            </div>
          </Form>
        </div>
      </Modal>
      <div className={styles.notificationContainer}>
        {notifications.map((notification, index) => (
          <Notification
            key={index}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotification(index)}
          />
        ))}
      </div>
    </div>
  );
}
