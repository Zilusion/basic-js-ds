const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.head = null; // Указатель на первый элемент (голова очереди)
    this.tail = null; // Указатель на последний элемент (хвост очереди)
  }

  getUnderlyingList() {
    return this.head; // Возвращаем текущую голову очереди
  }

  enqueue(value) {
    const newNode = new ListNode(value); // Создаем новый узел

    if (this.tail) {
      this.tail.next = newNode; // Связываем текущий хвост с новым узлом
    }
    this.tail = newNode; // Обновляем указатель на хвост

    if (!this.head) {
      this.head = newNode; // Если очередь была пуста, обновляем голову
    }
  }

  dequeue() {
    if (!this.head) return null; // Если очередь пуста, возвращаем null

    const removedValue = this.head.value; // Сохраняем значение для возврата
    this.head = this.head.next; // Сдвигаем указатель головы

    if (!this.head) {
      this.tail = null; // Если очередь опустела, сбрасываем указатель хвоста
    }

    return removedValue; // Возвращаем удаленное значение
  }
}

module.exports = {
  Queue,
};

