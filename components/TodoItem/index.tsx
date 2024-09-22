import Checkbox from "../Checkbox";
import Button from "../Button";
import styles from "@/styles/TodoItem.module.scss";
import stylesModal from "@/styles/Modal.module.scss";
import Modal from "../Modal";
import Image from "next/image";
import Notification from "../Notification";
import useTodoItem from "@/hook/useTodoItem";

interface TodoItemsProps {
  todos: {
    _id: string;
    description: string;
    completed: boolean;
  }[];
}

export default function TodoItem({ todos }: TodoItemsProps) {
  const {
    handleDeleteClick,
    handleToggle,
    loading,
    isModalOpen,
    setIsModalOpen,
    confirmDelete,
    notification,
    setNotification,
  } = useTodoItem();
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo._id}
          className={`${styles.todoItem} ${
            todo.completed ? styles.completed : ""
          }`}
        >
          <div className={styles.left}>
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggle(todo._id, todo.completed)}
              disabled={loading}
            />
            <span className={styles.description}>{todo.description}</span>
          </div>
          <div className={styles.right}>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteClick(todo._id)}
              disabled={loading}
            >
              <Image src="/trash.svg" alt="Delete" width={20} height={20} />
            </button>
          </div>
        </div>
      ))}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={stylesModal.containerContent}>
          <div className={stylesModal.containerText}>
            <h2 className={stylesModal.modalTitle}>Deletar tarefa</h2>
            <p className={stylesModal.modalSubtitle}>
              Tem certeza de que deseja deletar esta tarefa?
            </p>
          </div>
          <div className={stylesModal.modalActions}>
            <Button
              label="Cancelar"
              onClick={() => setIsModalOpen(false)}
              variant="secondary"
              disabled={loading}
            />
            <Button
              label="Deletar"
              onClick={confirmDelete}
              variant="error"
              disabled={loading}
            />
          </div>
        </div>
      </Modal>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}
