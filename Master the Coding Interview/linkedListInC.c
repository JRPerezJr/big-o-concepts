//Linked List: Inserting a node at the beginning
#include<stdlib.h>
#include<stdio.h>
struct Node
{
    /* data */
    int data;
    struct Node* next;
};
struct Node* head; //global variable, can be accessed anywhere
// void Insert(int x) {
//     Node* temp = (Node*)malloc(sizeof(struct Node));//create a node and allocate memory
//     temp->data = x;
//     temp->next = NULL; //used when the list is empty
//     head = temp;
//     if(head !=NULL) temp->next = head;//if the list is not empty set temp to head
// };

//A better version of Insert
void Insert(int x)
{
    Node* temp = (Node*)malloc(sizeof(struct Node));//create a node and allocate memory
    temp->data = x;
    temp->next = head; 
    head = temp;
};
void Print() {
    struct Node* temp = head;
    printf("List is: ");
    while (temp !=NULL)
    {
        printf(" %d", temp->data);
        temp= temp->next;
    }
    printf("\n");
    
};

int main() {
    head = NULL;// empty list
    printf("How many numbers?\n");
    int n, i, x;
    scanf("%d",&n);
    for(i = 0; i<n; i++) {
        printf("Enter the number \n");
        scanf("%d",&x);
        Insert(x);
        Print();
    }
}
