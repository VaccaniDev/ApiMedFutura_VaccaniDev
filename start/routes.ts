import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'



router.post('/pessoas', [UsersController, 'create'])
router.get('/pessoas/:id', [UsersController, 'get'])
router.get('/pessoas', [UsersController, 'search'])
router.put('/pessoas/:id', [UsersController, 'update'])
router.delete('/pessoas/:id', [UsersController, 'delete'])