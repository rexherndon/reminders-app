import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder'


function App() {
  // this code should only be focused on rendering the UI
  // other code, like calling the API in local storage, should be implemented in other classes
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  }

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
