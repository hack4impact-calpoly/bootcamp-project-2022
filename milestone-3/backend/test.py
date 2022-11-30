#navigating arrays
import os, sys

test_array = ['1', '2', '3', 'wow']

def convertStringToNumber(string : str):
    temp_num = 0
    try:
        temp_num = int(string)
        print(f'{temp_num} + 1 = {temp_num + 1}')
    except Exception as E:
        if string == 'q':
            print('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
            print('EXIT SUCCESFULL')
            sys.exit()
        print(f'{string} is not a number.')


print('THE ADD BY 1 GAME (type q to quit)\n')
while True:
    print('Input a number: ', end='')
    convertStringToNumber(input())
    print('\n\n')
    
