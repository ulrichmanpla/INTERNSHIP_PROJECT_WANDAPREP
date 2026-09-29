

--@block

UPDATE tasks
SET priority = "medium" 
WHERE id = 5 AND user_id = 3;

--@block 
SELECT * FROM tasks
ORDER BY  id DESC
 ;

--@block 
DESCRIBE tasks;

--@BLOCK
ALTER TABLE tasks 
MODIFY COLUMN created_at TEXT NOT NULL;

--@block 
SELECT * FROM users;

--@block 
DELETE FROM users WHERE  id IN (13);

--@block
DESCRIBE users;