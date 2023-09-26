import { Injectable } from '@nestjs/common';
import { gptResType } from './generate.interface';

@Injectable()
export class GenerateService {
    private testcase: string = '\
Nest.jsはNode.jsベースのフレームワークで、スケーラビリティのあるWebアプリケーションを構築するための素晴らしいツールです。Nest.jsを学ぶための推奨手順を以下に示します。この手順に従って学習を進めることで、効果的にNest.jsをマスターできるでしょう。\
1. Node.jsとnpmのインストール:\
Nest.jsはNode.js上で動作します。まず、Node.jsとnpm（Node Package Manager）をインストールして、環境をセットアップします。Node.jsの公式ウェブサイトから最新バージョンをダウンロードし、インストールしてください。\
2. TypeScriptの基本を学ぶ:\
Nest.jsはTypeScriptを使用していますので、TypeScriptの基本を学びましょう。TypeScriptはJavaScriptのスーパーセットであり、型安全性を提供します。\
3. Nest.jsのドキュメントを読む:\
Nest.jsの公式ドキュメントは非常に詳細で役立つ情報が豊富にあります。まずはドキュメントを読み始めましょう。基本的なコンセプトやディレクトリ構造について理解しましょう。\
4. Nest CLIのインストール:\
Nest CLI（Command Line Interface）をインストールすると、プロジェクトの作成やコードの自動生成などが簡単に行えます。以下のコマンドでインストールします。\
```\
npm install -g @nestjs/cli\
```\
5. 新しいNest.jsプロジェクトの作成:\
Nest CLIを使用して新しいプロジェクトを作成します。\
```\
nest new project-name\
```\
6. プロジェクトのセットアップと実行:\
プロジェクトフォルダに移動し、必要な依存関係をインストールします。\
```\
cd project-name\
npm install\
```\
その後、アプリケーションを起動します。\
```\
npm run start\
```\
7. ルーティングとコントローラの作成:\
Nest.jsでは、ルーターとコントローラーを使用してエンドポイントを定義します。新しいルートやコントローラを作成して、APIのエンドポイントを設定しましょう。\
8. サービスとDI（Dependency Injection）の理解:\
Nest.jsのサービスとDIの概念を理解しましょう。サービスはビジネスロジックを格納する場所です。\
9. モジュールの作成:\
モジュールはアプリケーションの機能を組織化するために使用されます。新しいモジュールを作成し、コンポーネントを登録してみてください。\
10. ミドルウェアとフィルタの使用:\
ミドルウェアとフィルタを使用して、リクエストとレスポンスの処理をカスタマイズしましょう。\
11. データベースとの連携:\
Nest.jsは多くのデータベースとの連携をサポートしています。データベースとの連携を学び、データベース操作を組み込みましょう。\
12. テスト:\
ユニットテストと統合テストを書き、Nest.jsアプリケーションをテストしましょう。\
13. セキュリティと認証:\
アプリケーションのセキュリティと認証に関するベストプラクティスを学び、実装しましょう。\
14. エラーハンドリングとロギング:\
エラーハンドリングとロギングを実装し、アプリケーションのデバッグとトラブルシューティングを行いましょう。\
15. プロダクションへのデプロイ:\
Nest.jsアプリケーションをプロダクション環境にデプロイする方法を学びましょう。\
16. コミュニティとリソースの活用:\
Nest.jsのコミュニティやオンラインリソースを活用して、問題を解決し、スキルを向上させましょう。\
この手順に従ってNest.jsを学習すると、堅牢でスケーラブルなWebアプリケーションを開発するための基本的なスキルを習得できます。学習プロセスは自己学習と実践が重要ですので、実際のプロジェクトでNest.jsを使用してみることをお勧めします。'

    private gptResponse: gptResType = {id: 1, flow: ["test1", "test2"]};

    private strSplit(): void{
        let flow:string[] = [];
        let order = 1;
        let str = "";
        for (let i = 0; i < this.testcase.length; i++){
            let char = this.testcase.charAt(i);
            if (char === String(order)){
                flow.push(str);
                order++;
                str = char;
            } else {
                str += char;
            }
        }

        this.gptResponse.flow = flow;
    }

    gptRes(): gptResType {
        this.strSplit();
        return this.gptResponse;
    }
}
