```py title="views.py"
from rest_framework.decorators import api_view, authentication_classes
from rest_framework.response import Response
from auth_middleware import AccessTokenAuthentication

@api_view(['GET'])
@authentication_classes([AccessTokenAuthentication])
def protected_view(request):
    # request.user.auth から認証情報 (auth information) にアクセス
    return Response({"auth": request.user.auth.to_dict()})
```

**またはクラスベースビューを使用する場合：**

```py title="views.py"
from rest_framework.views import APIView
from rest_framework.response import Response
from auth_middleware import AccessTokenAuthentication

class ProtectedView(APIView):
    authentication_classes = [AccessTokenAuthentication]

    def get(self, request):
        # request.user.auth から認証情報 (auth information) にアクセス
        return Response({"auth": request.user.auth.to_dict()})
```

```py title="urls.py"
from django.urls import path
from . import views

urlpatterns = [
    path('api/protected/', views.protected_view, name='protected'),
    # クラスベースビューの場合は以下を使用：
    # path('api/protected/', views.ProtectedView.as_view(), name='protected'),
]
```
