export default class APIService {
  
  apiBase = "http://localhost:5000/api/v1";

  getResource = async (url) => {
    const res = await fetch(`${this.apiBase}${url}`);

    return await res.json();
  }

  getBoards = async () => {
    const res = await this.getResource('/boards/');
    return res;
  }

  getBoardById = async (board_id) => {
    const res = await this.getResource(`/boards/${board_id}`);
    return res;
  }

  getThreadsByBoardId = async (board_id) => {
    const res = await this.getResource(`/boards/${board_id}/threads`)
    return res;
  }

  getMessagesByThreadId = async (thread_id) => {
    const res = await this.getResource(`/threads/${thread_id}/messages`);
    return res;
  }
}