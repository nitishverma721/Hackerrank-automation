module.exports = {
    answers: [
        `#include <bits/stdc++.h>
        using namespace std;

        int main(){
            int elements;
            cin >> elements;
            vector <int> array(elements);
            int sum = 0;
            
            for(int i=0; i<elements; i++){
                cin >> array[i];
                sum += array[i];
            }
            
            cout << sum;
            return 0;
        }
`
    ]
}