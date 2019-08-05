#include <stdlib.h>
#include <stdio.h>
struct Node
{
    /* data */
    int data;
    struct Node *next;
};
struct Node *head; //global

void Insert(int data);//insert an integer at the end of the list

void Print(); //print all the elements in the list

void Delete(int n) {
    struct Node* temp1 = head;
    if(n == 1) {
        head = temp1->next; //head now points to second node
        free(temp1);
        return;
    }
    int i;
    for(i = 0; i<n-2; i++) 
        temp1 = temp1->next;//temp points to (n-1)th Node
        struct Node* temp2 = temp1->next; //nth Node
        temp1->next = temp2->next; //(n+1)th Node
        free(temp2); //delete temp2;
    
};//Delete node at position n

int main() {
    head = NULL; //empty list
    Insert(2);
    Insert(4);
    Insert(6);
    Insert(5); //List 2,4,6,5
    Print();
    int n;
    printf("Enter a position\n");
    scanf("%d", &n);
    Delete(n);
    Print();

}