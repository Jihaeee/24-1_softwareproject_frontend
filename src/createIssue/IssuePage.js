import React, { useState } from 'react';

function IssuePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reporter, setReporter] = useState('');
  const [reportedDate, setReportedDate] = useState('');
  const [fixer, setFixer] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('major');
  const [status, setStatus] = useState('new');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIssue = {
      title,
      description,
      reporter,
      reportedDate,
      fixer,
      assignee,
      priority,
      status,
      comments: [{ text: comments, date: new Date().toLocaleString() }],
    };

    const existingIssues = JSON.parse(localStorage.getItem('issues')) || [];
    localStorage.setItem('issues', JSON.stringify([...existingIssues, newIssue]));

    setTitle('');
    setDescription('');
    setReporter('');
    setReportedDate('');
    setFixer('');
    setAssignee('');
    setPriority('major');
    setStatus('new');
    setComments('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>새로운 티켓 작성하기</h2>
      <label htmlFor="title">제목:</label>
      <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label htmlFor="description">상세 설명:</label>
      <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

      <label htmlFor="reporter">보고자:</label>
      <input type="text" id="reporter" name="reporter" value={reporter} onChange={(e) => setReporter(e.target.value)} required />

      <label htmlFor="reportedDate">보고일자:</label>
      <input type="date" id="reportedDate" name="reportedDate" value={reportedDate} onChange={(e) => setReportedDate(e.target.value)} required />

      <label htmlFor="fixer">수정자:</label>
      <input type="text" id="fixer" name="fixer" value={fixer} onChange={(e) => setFixer(e.target.value)} />

      <label htmlFor="assignee">담당자:</label>
      <input type="text" id="assignee" name="assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)} />

      <label htmlFor="priority">우선 순위:</label>
      <select id="priority" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="blocker">blocker</option>
        <option value="critical">critical</option>
        <option value="major">major</option>
        <option value="minor">minor</option>
        <option value="trivial">trivial</option>
      </select>

      <label htmlFor="status">이슈 상태:</label>
      <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="new">new</option>
        <option value="assigned">assigned</option>
        <option value="resolved">resolved</option>
        <option value="closed">closed</option>
        <option value="reopened">reopened</option>
      </select>

      <label htmlFor="comments">코멘트:</label>
      <textarea id="comments" name="comments" value={comments} onChange={(e) => setComments(e.target.value)}></textarea>

      <button type="submit">Create</button>
    </form>
  );
}

export default IssuePage;
