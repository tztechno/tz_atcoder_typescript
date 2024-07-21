abc363_c.ts
#################################################
[TLE]

function isNonPalindromic(s: string, k: number): boolean {
    for (let i = 0; i <= s.length - k; i++) {
        const substring = s.substring(i, i + k);
        if (isPalindrome(substring)) {
            return false;
        }
    }
    return true;
}

function isPalindrome(s: string): boolean {
    const len = s.length;
    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function permute(str: string): Set<string> {
    const results = new Set<string>();
    const arr = str.split('');
    permuteHelper(arr, 0, results);
    return results;
}

function permuteHelper(arr: string[], index: number, results: Set<string>) {
    if (index === arr.length) {
        results.add(arr.join(''));
        return;
    }

    for (let i = index; i < arr.length; i++) {
        swap(arr, index, i);
        permuteHelper(arr, index + 1, results);
        swap(arr, index, i); // backtrack
    }
}

function swap(arr: string[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Read input from stdin
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (firstLine) => {
    const [N, K] = firstLine.split(' ').map(Number);
    
    rl.question('', (S) => {
        const perms = permute(S);
        let count = 0;

        for (const perm of perms) {
            if (isNonPalindromic(perm, K)) {
                count++;
            }
        }

        console.log(count);
        rl.close();
    });
});
