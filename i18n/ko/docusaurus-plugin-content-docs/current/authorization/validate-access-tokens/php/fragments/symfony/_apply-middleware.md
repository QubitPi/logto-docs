```php title="src/Controller/Api/ProtectedController.php"
<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/protected')]
#[IsGranted('IS_AUTHENTICATED_FULLY')]
class ProtectedController extends AbstractController
{
    #[Route('', methods: ['GET'])]
    public function index(Request $request): JsonResponse
    {
        // 요청 속성에서 인증 (Authentication) 정보를 가져옵니다
        $auth = $request->attributes->get('auth');
        return $this->json(['auth' => $auth->toArray()]);
    }
}
```
