import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { User } from '../services/userService'

function initials(name: string) {
  return name.split(' ').slice(0, 2).map((p) => p[0]).join('').toUpperCase()
}

type UserCardProps = {
  user: User
  onEdit: (user: User) => void
  onDelete: (user: User) => void
}

export function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <Card>
      <CardContent>
        <Stack direction="column" spacing={2} alignItems="center">
          <Avatar sx={{ border: '1px solid', bgcolor:'white', color:'dodgerblue', width: 75, height: 75 }}>
            {initials(user.name)}
          </Avatar>

          <Stack spacing={0.25} sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" sx={{ fontSize: '25px' }}> {user.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              @{user.username}
            </Typography>
            <Typography variant="body2" color="dodgerblue">{user.email}</Typography>
          </Stack>

          <Stack direction="row" spacing={4}>
            <IconButton
              aria-label={`Editar ${user.name}`}
              onClick={() => onEdit(user)}
              sx={{
                border: '1px solid',
                borderColor: 'grey',
                borderRadius: 2,
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label={`Eliminar ${user.name}`}
              color="error"
              onClick={() => onDelete(user)}
              sx={{
                border: '1px solid',
                borderColor: 'red',
                borderRadius: 2,         
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
