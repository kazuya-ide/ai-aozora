// src/components/PostCard.tsx
import React from 'react';
import Image from 'next/image';
import AnimatedCard from '@/app/components/AnimatedCard'; // AnimatedCardコンポーネントをインポート
//型定義
interface Post {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    featured_media: number;
    _embedded?: {
        'wp:featuredmedia'?: {
            source_url: string;
        }[]
        'wp:term'?: { // カテゴリーやタグ情報を取得するための型定義を追加
            name: string;
            taxonomy: string;
        }[][];
    } | undefined;
    // カスタムフィールドに対応するための型定義を追加
    acf?: {
      [key: string]: any;
    }
}
// PostCardコンポーネントのPropsの型定義
interface PostCardProps {
    post: Post;
    delay: number;
    onReadMoreClick: (post: Post) => void;
    // 表示するテキストの種類を制御するためのPropsを追加
    displayTitle?: boolean;
    displayExcerpt?: boolean; // 抜粋を表示するかどうか
    displayContent?: boolean; // コンテンツを表示するかどうか
    contentMaxLength?: number; // コンテンツの最大表示文字数
    titleMaxLength?: number; // タイトルの最大文字数
    imageSizes?: string; // 画像のsizes属性を設定
    imageStyle?: React.CSSProperties; // 画像のスタイルを設定
    buttonText?: string; // ボタンのテキストを設定
    buttonStyle?: React.CSSProperties; // ボタンのスタイルを設定
    // カテゴリーとタグを表示するためのPropsを追加
    displayCategories?: boolean;
    displayTags?: boolean;
    // カスタムフィールドを表示するためのPropsを追加
    customFields?: string[]; // 表示するカスタムフィールドのキーの配列
    // その他の要素を追加できるprops
    additionalContent?: React.ReactNode;
     // アニメーションの種類を指定するためのPropsを追加
    animationType?: 'fade' | 'slide' | 'zoom' | 'none'; // アニメーションの種類を設定
    // アニメーションの時間を設定
    animationDuration?: number;
     // アニメーションのeasingを設定
    animationEasing?: string;
    // いいねボタンを表示するかどうか
    displayLikeButton?: boolean;

}


const PostCard: React.FC<PostCardProps> = ({
    post,
    delay,
    onReadMoreClick,
    displayTitle = true, // タイトル表示のデフォルトをtrue
    displayExcerpt = false, // 抜粋表示のデフォルトをfalse
    displayContent = false, // コンテンツ表示のデフォルトをfalse
    contentMaxLength = 50, // コンテンツの最大表示文字数のデフォルトを50
    titleMaxLength = 50, // タイトルの最大文字数のデフォルトを50
    imageSizes="(max-width: 768px) 100vw, 33vw", // 画像のsizes属性のデフォルト値を設定
    imageStyle = { objectFit: 'cover' }, // 画像のスタイルのデフォルト値を設定
    buttonText = "Read More", // ボタンのテキストのデフォルトを設定
    buttonStyle = { }, // ボタンのスタイルのデフォルトを設定
    displayCategories = false, // カテゴリー表示のデフォルトをfalse
    displayTags = false, // タグ表示のデフォルトをfalse
    customFields = [],// カスタムフィールド表示のデフォルトを空の配列
    additionalContent, // 追加コンテンツを配置できる
    animationType = 'fade', // アニメーションのタイプをデフォルトでfadeに設定
    animationDuration = 0.3, // アニメーションの時間を設定
    animationEasing = 'ease-in-out', // アニメーションのeasingを設定
    displayLikeButton = false, // いいねボタンの表示設定
}) => {
    // テキストを省略する関数
     const truncateText = (text: string, maxLength: number) => {
        if (!text) return '';
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };

    return (
        // AnimatedCardコンポーネントでラップ
        <AnimatedCard
            key={post.id}
            delay={delay}
            className="rounded-lg border text-gray-900 dark:text-white shadow-sm bg-transparent w-full flex flex-col" // デフォルトのスタイル
            animationType={animationType} // アニメーションの種類を渡す
            animationDuration={animationDuration} // アニメーション時間を渡す
            animationEasing={animationEasing} // アニメーションのeasingを渡す
        >
          {/* 画像を表示する部分 */}
            {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
                <button
                    onClick={() => onReadMoreClick(post)}
                    className="w-full relative aspect-video"
                >
                  {/*  Imageコンポーネントで画像を表示 */}
                    <Image
                        src={post._embedded['wp:featuredmedia'][0].source_url} // 画像のURLを指定
                        alt={post.title.rendered} // 画像のalt属性を設定
                        fill // 親要素に合わせて画像を表示
                        className="object-cover rounded-t-lg"  // 画像のクラス名を指定
                        sizes={imageSizes} // 画像のsizes属性を設定
                         style={imageStyle} // 画像のスタイルを適用
                    />
                </button>
            )}
              {/* カードのコンテンツを格納するdiv */}
             <div className="p-4 flex flex-col">
                 {/* タイトルを表示する部分 */}
                {displayTitle && (
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        {truncateText(post.title.rendered, titleMaxLength)} {/* タイトルを表示 */}
                    </h3>
                )}
               {/*  抜粋を表示する部分 */}
                {displayExcerpt && (
                     <div
                      className="text-sm text-gray-600 overflow-hidden line-clamp-3 dark:text-gray-400 flex-1"
                    dangerouslySetInnerHTML={{ __html: truncateText(post.content.rendered, contentMaxLength) }} // 抜粋を表示
                    />
                )}
                {/* コンテンツを表示する部分 */}
                {displayContent && (
                    <div
                        className="text-sm text-gray-600 overflow-hidden line-clamp-3 dark:text-gray-400 flex-1"
                        dangerouslySetInnerHTML={{ __html: truncateText(post.content.rendered, contentMaxLength) }} // コンテンツを表示
                    />
                )}
                  {/* カスタムフィールドを表示する部分 */}
                   {customFields && customFields.length > 0 && (
                     <div>
                         {customFields.map(fieldKey => (
                             <div key={fieldKey} className="mt-2">
                             {post.acf && post.acf[fieldKey] && (
                                 // 表示するカスタムフィールドの値を格納
                                 <div>
                                     {typeof post.acf[fieldKey] === 'string' ? (
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{post.acf[fieldKey]}</span>
                                     ) : (
                                       // カスタムフィールドがオブジェクトの場合JSON形式で表示
                                         <pre className="text-sm text-gray-600 dark:text-gray-400">
                                             {JSON.stringify(post.acf[fieldKey], null, 2)}
                                          </pre>
                                     )}
                                 </div>
                             )}
                            </div>
                        ))}
                     </div>
                    )}
                {/* カテゴリーを表示する部分 */}
                 {displayCategories && post._embedded && post._embedded['wp:term'] && (
                   <div className="flex flex-wrap gap-1 mt-2">
                     {post._embedded['wp:term'].map(terms =>
                         terms.filter(term => term.taxonomy === 'category').map(category => (
                           <span key={category.name} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs rounded px-2 py-1 mr-1 mb-1">{category.name}</span>
                         ))
                       )}
                    </div>
                  )}
                 {/* タグを表示する部分 */}
                {displayTags && post._embedded && post._embedded['wp:term'] && (
                   <div className="flex flex-wrap gap-1 mt-2">
                     {post._embedded['wp:term'].map(terms =>
                       terms.filter(term => term.taxonomy === 'post_tag').map(tag => (
                         <span key={tag.name} className="bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-300 text-xs rounded px-2 py-1 mr-1 mb-1">{tag.name}</span>
                       ))
                       )}
                     </div>
                    )}
                {/* 追加コンテンツを表示する部分 */}
                {additionalContent}
                  {/* Read Moreボタンを表示する部分 */}
                 <div className="text-center py-2">
                    <button
                        onClick={() => onReadMoreClick(post)} // クリック時にonReadMoreClickを実行
                        className="text-blue-500 hover:underline"
                        style={buttonStyle} // ボタンのスタイルを適用
                    >
                        {buttonText} {/* ボタンのテキストを表示 */}
                    </button>
                </div>
                 {/* いいねボタンを表示する部分 */}
                 {displayLikeButton && (
                    <div className="text-center py-2">
                       <button className="text-gray-500 hover:text-red-500">
                         ❤️
                        </button>
                     </div>
                   )}
            </div>
        </AnimatedCard>
    );
};

export default PostCard;