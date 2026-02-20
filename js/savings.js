(function() {
  // Keys
  const STORAGE_BALANCE = 'v1_balance';
  const STORAGE_GOAL = 'v1_goal';
  const STORAGE_LAST_PAYCHECK = 'v1_last_paycheck';

  // Elements
  const balanceInput = document.getElementById('balance');
  const goalInput = document.getElementById('goal');
  const updateBalanceBtn = document.getElementById('updateBalance');
  const updateGoalBtn = document.getElementById('updateGoal');
  const currentSpan = document.getElementById('current');
  const targetSpan = document.getElementById('target');
  const progressBar = document.getElementById('progressBar');
  const goalMessage = document.getElementById('goalMessage');
  
  const paycheckInput = document.getElementById('paycheckInput');
  const calcPaycheckBtn = document.getElementById('calcPaycheckBtn');
  const needsSpan = document.getElementById('needsAmount');
  const wantsSpan = document.getElementById('wantsAmount');
  const savingsSpan = document.getElementById('savingsAmount');
  const resetBtn = document.getElementById('resetLocalBtn');
  const keitoMessage = document.getElementById('keitoMessage');
  const feedback = document.getElementById('feedbackMsg');

  
  // Saved answers loading in
  function loadFromStorage() {
      const savedBalance = localStorage.getItem(STORAGE_BALANCE);
      balanceInput.value = savedBalance !== null ? savedBalance : 0;
      
      const savedGoal = localStorage.getItem(STORAGE_GOAL);
      goalInput.value = savedGoal !== null ? savedGoal : 1000;

      const savedPaycheck = localStorage.getItem(STORAGE_LAST_PAYCHECK);
      if (savedPaycheck !== null) {
          const pc = parseFloat(savedPaycheck) || 0;
          paycheckInput.value = pc;
          updateSuggestionFromPaycheck(pc);
      } else {
          paycheckInput.value = 0;
          updateSuggestionFromPaycheck(0);
      }
      
      updateGoalProgress();
  }

  
  // Progress
  function updateGoalProgress() {
      let balance = parseFloat(balanceInput.value) || 0;
      let goal = parseFloat(goalInput.value) || 1000;
      
      currentSpan.innerText = '$' + balance;
      targetSpan.innerText = '$' + goal + ' goal';
      
      let percent = Math.min(100, (balance / goal) * 100);
      progressBar.style.width = percent + '%';
      progressBar.style.background = '#a9da6e';
      
      // Keito's messages based on how far in the goal they are.
      if (balance >= goal) {
          goalMessage.innerText = 'You have achieved your goal!';
          keitoMessage.innerText = 'Splendid job. I knew if you put your mind to it, you could do it.';
      } else if (balance === 0) {
          goalMessage.innerText = 'Start saving toward your goal';
          keitoMessage.innerText = 'Set the goal you wish to have for your savings account.';
      } else {
          let left = goal - balance;
          let percentInt = Math.floor(percent);
          goalMessage.innerText = `You have $${left.toFixed(2)} more to go | You're ${percentInt}% of the way there`;
          
          if (percentInt >= 75) {
              keitoMessage.innerText = 'Almost there. Keep it up!';
          } else if (percentInt >= 50) {
              keitoMessage.innerText = 'You are halfway there. Keep it up.';
          } else if (percentInt >= 33) {
              keitoMessage.innerText = 'You are a third of the way there. Keep it up.';
          } else if (percentInt >= 25) {
              keitoMessage.innerText = 'You are a quarter of the way there. That is quite a great start.';
          } else {
              keitoMessage.innerText = 'Every dollar saved counts.';
          }
      }
  }

  // Save bar for saving things
  function saveBalance() {
      let balance = parseFloat(balanceInput.value) || 0;
      localStorage.setItem(STORAGE_BALANCE, balance.toString());
      updateGoalProgress();
      feedback.innerText = 'Savings updated!';
      setTimeout(() => { feedback.innerText = ''; }, 2000);
  }

  function saveGoal() {
      let goal = parseFloat(goalInput.value) || 1000;
      if (goal < 1) goal = 1000;
      goalInput.value = goal;
      localStorage.setItem(STORAGE_GOAL, goal.toString());
      updateGoalProgress();
      feedback.innerText = 'You have set your goal.';
      setTimeout(() => { feedback.innerText = ''; }, 2000);
  }

  // 50/30/20
  function updateSuggestionFromPaycheck(paycheckAmount) {
      const num = Math.max(0, parseFloat(paycheckAmount) || 0);
      const needs = Math.floor(num * 0.5);
      const wants = Math.floor(num * 0.3);
      const savings = Math.floor(num * 0.2);

      needsSpan.innerText = `$${needs}`;
      wantsSpan.innerText = `$${wants}`;
      savingsSpan.innerText = `$${savings}`;

      localStorage.setItem(STORAGE_LAST_PAYCHECK, num.toString());
  }

  function handlePaycheck() {
      const paycheckVal = parseFloat(paycheckInput.value) || 0;
      updateSuggestionFromPaycheck(paycheckVal);
      feedback.innerText = '50/30/20 updated!';
      setTimeout(() => { feedback.innerText = ''; }, 1400);
  }

  // Reset data
  function resetLocalData() {
      if (confirm('Clear all locally stored numbers?')) {
          localStorage.removeItem(STORAGE_BALANCE);
          localStorage.removeItem(STORAGE_GOAL);
          localStorage.removeItem(STORAGE_LAST_PAYCHECK);
          
          balanceInput.value = 0;
          goalInput.value = 1000;
          paycheckInput.value = 0;
          
          updateSuggestionFromPaycheck(0);
          updateGoalProgress();
          
          feedback.innerText = 'Your data has been cleared!';
          keitoMessage.innerText = 'Cleaned the slate, mm...?';
          setTimeout(() => { keitoMessage.innerText = 'Let us set a plan.'; }, 2000);
      }
  }

  updateBalanceBtn.addEventListener('click', saveBalance);
  updateGoalBtn.addEventListener('click', saveGoal);
  calcPaycheckBtn.addEventListener('click', handlePaycheck);
  resetBtn.addEventListener('click', resetLocalData);

  balanceInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') saveBalance();
  });
  goalInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') saveGoal();
  });
  paycheckInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handlePaycheck();
  });

  loadFromStorage();
})();