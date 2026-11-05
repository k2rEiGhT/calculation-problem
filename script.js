// 2桁の足し算問題を生成
function generateAddition() {
    const num1 = Math.floor(Math.random() * 90) + 10; // 10-99
    const num2 = Math.floor(Math.random() * 90) + 10; // 10-99
    return `${num1} + ${num2} = `;
}

// 2桁の引き算問題を生成（答えが正の数になるように）
function generateSubtraction() {
    const num1 = Math.floor(Math.random() * 90) + 10; // 10-99
    const num2 = Math.floor(Math.random() * num1) + 1; // 1からnum1まで
    return `${num1} - ${num2} = `;
}

// 1桁の掛け算問題を生成
function generateMultiplication() {
    const num1 = Math.floor(Math.random() * 9) + 1; // 1-9
    const num2 = Math.floor(Math.random() * 9) + 1; // 1-9
    return `${num1} × ${num2} = `;
}

// 1桁の割り算問題を生成（割り切れるように）
function generateDivision() {
    const num2 = Math.floor(Math.random() * 9) + 1; // 1-9 (割る数)
    const quotient = Math.floor(Math.random() * 9) + 1; // 1-9 (商)
    const num1 = num2 * quotient; // 割られる数
    return `${num1} ÷ ${num2} = `;
}

// 問題タイプをランダムに選択
function generateRandomProblem() {
    const problemTypes = [
        generateAddition,
        generateSubtraction,
        generateMultiplication,
        generateDivision
    ];
    
    const randomType = problemTypes[Math.floor(Math.random() * problemTypes.length)];
    return randomType();
}

// 50問の問題を生成（左右分割）
function generateProblems() {
    const problemsContainer = document.getElementById('problems');
    problemsContainer.innerHTML = '';
    
    // 左側の列（1-25）
    const leftColumn = document.createElement('div');
    leftColumn.className = 'problem-column';
    
    // 右側の列（26-50）
    const rightColumn = document.createElement('div');
    rightColumn.className = 'problem-column';
    
    // 左側の問題（1-25）
    for (let i = 1; i <= 25; i++) {
        const problemDiv = document.createElement('div');
        problemDiv.className = 'problem';
        
        const problemNumber = document.createElement('span');
        problemNumber.className = 'problem-number';
        problemNumber.textContent = `（${i}）`;
        
        const problemText = document.createElement('span');
        problemText.className = 'problem-text';
        problemText.textContent = generateRandomProblem();
        
        problemDiv.appendChild(problemNumber);
        problemDiv.appendChild(problemText);
        leftColumn.appendChild(problemDiv);
    }
    
    // 右側の問題（26-50）
    for (let i = 26; i <= 50; i++) {
        const problemDiv = document.createElement('div');
        problemDiv.className = 'problem';
        
        const problemNumber = document.createElement('span');
        problemNumber.className = 'problem-number';
        problemNumber.textContent = `（${i}）`;
        
        const problemText = document.createElement('span');
        problemText.className = 'problem-text';
        problemText.textContent = generateRandomProblem();
        
        problemDiv.appendChild(problemNumber);
        problemDiv.appendChild(problemText);
        rightColumn.appendChild(problemDiv);
    }
    
    // コンテナに左右の列を追加
    problemsContainer.appendChild(leftColumn);
    problemsContainer.appendChild(rightColumn);
}

// ページ読み込み時に問題を生成
window.onload = function() {
    generateProblems();
};